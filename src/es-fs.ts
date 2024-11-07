import fs from "node:fs"; // file system - roba che riguarda la gestione di files e cartelle
import path from "node:path";
import { DateTime } from "luxon";

export default () => {
    const workDir = process.cwd();
    const dataFullDir = path.join(workDir, "data");

    try {
        // lettura file di testo
        const pathDelFile = path.join(dataFullDir, "file.txt");
        const testo = fs.readFileSync(pathDelFile, "utf8");

        console.log("LETTURA TERMINATA");

        console.log(testo);
    } catch (error) {
        console.log(error);
        console.log("Si è verificato un errore.");
    }

    // scrittura
    let contenuto = `Sono le ore ${new Date().toLocaleTimeString()}`;

    // for (let i = 0; i < 1200; i++) {
    //     contenuto += "\nTi voglio tanto bene!";
    // }

    try {
        fs.writeFileSync(path.join(dataFullDir, "orario.txt"), contenuto, "utf8");
        console.log("SCRITTURA OK");
    } catch (error) {
        console.log("Errore nella scrittura");
    }

    try {
        // alternativa 1
        const entities = fs.readdirSync(workDir, { withFileTypes: true });

        for (const entity of entities) {
            console.log(entity.isDirectory() ? "[Dir]" : "[Fil]", entity.name);
        }

        // alternativa 2
        const names = fs.readdirSync(workDir);

        for (const name of names) {
            const stat = fs.statSync(path.join(workDir, name));
            console.log(stat.isDirectory() ? "[Dir]" : "[Fil]", name, stat.size);
        }
    } catch (error) {
        console.log("ERRORE");
    }

    // statistiche (metadati) delle entità (file/cartelle)
    try {
        const entity = fs.statSync(path.join(dataFullDir, "pippo.csv"));

        let dataModifica = DateTime.fromMillis(entity.ctimeMs);
        console.log(dataModifica.setLocale("it").toFormat("dd MMMM yyyy HH:mm"));

    } catch (error) {

    }
}