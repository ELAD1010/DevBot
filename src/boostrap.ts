import * as dotenv from "dotenv";
import { AsyncVoidFunction } from "./common/types";
import * as os from "./utils/async-os-utils";
import Colors from "./utils/colors";
export const setupBoostrap: AsyncVoidFunction = async () => {
  console.log(`${Colors.Magenta}
CPU: ${os.cpuModel()}
----------------------------------------------------
CPU Usage: ${await os.cpuUsage()}/100 %
----------------------------------------------------
Remaining Memory: ${os.freeMemory()}/${os.totalMemory()} GB
----------------------------------------------------
Platform: ${os.version()} 
    ${Colors.Reset}`);
  dotenv.config();
};
