import fs from "fs";
import path from "path";

const rootDir = path.join(__dirname, "..");

export const writeFileInRoot = (filename: string, content: string) => {
  const pathToSave = path.join(rootDir, filename);
  fs.writeFileSync(pathToSave, content);
};

export const readFileInRoot = (filename: string) => {
  return fs.readFileSync(path.join(rootDir, filename), "utf-8");
};
