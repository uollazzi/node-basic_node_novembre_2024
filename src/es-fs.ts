import fs from "node:fs"; // file system - roba che riguarda la gestione di files e cartelle
import path from "node:path";

export default () => {
    const workDir = process.cwd();
    const dataFullDir = path.join(workDir, "data");

    // lettura file di testo
    const pathDelFile = path.join(dataFullDir, "asd.txt");
    const testo = fs.readFileSync(pathDelFile, "utf8");

    console.log("LETTURA TERMINATA");

    console.log(testo);
}