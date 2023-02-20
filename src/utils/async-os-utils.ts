import osutils from "os-utils";
import os from "os";

export const cpuModel = () => os.cpus()[0].model;

export const cpuUsage = async () => {
  return new Promise((res, rej) =>
    osutils.cpuUsage((percent) => res((percent * 100).toFixed(0)))
  );
};

export const freeMemory = () => (os.freemem() * Math.pow(10, -9)).toFixed(2);

export const totalMemory = () => (os.totalmem() * Math.pow(10, -9)).toFixed(2);

export const version = () => os.version();
