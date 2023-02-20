import * as dotenv from "dotenv";
import * as os from "./utils/async-os-utils";

export const setupBoostrap = async () => {
  console.log(`\x1b[35m
CPU: ${os.cpuModel()}
----------------------------------------------------
CPU Usage: ${await os.cpuUsage()}/100 %
----------------------------------------------------
Remaining Memory: ${os.freeMemory()}/${os.totalMemory()} GB
----------------------------------------------------
Platform: ${os.version()} 
    \x1b[0m`);
  dotenv.config();
};
