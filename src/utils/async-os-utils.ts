import osutils from "os-utils";
import os from "os";

export const cpuModel = (): string => os.cpus()[0].model;

export const cpuUsage = async (): Promise<string> => {
  return new Promise(res =>
    osutils.cpuUsage(percent => res((percent * 100).toFixed(0)))
  );
};

export const freeMemory = (): string =>
  (os.freemem() * Math.pow(10, -9)).toFixed(2);

export const totalMemory = (): string =>
  (os.totalmem() * Math.pow(10, -9)).toFixed(2);

export const version = (): string => os.version();
