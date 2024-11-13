// import { somma, sottrazione } from "./matematica";
import * as mate from "./matematica";
import molt from "./matematica";
import op, { somma, sottrazione } from "./matematica";

let frutta = ["mela", "pera", "banana"];

// alternativa 1
// for (let i = 0; i < frutta.length; i++) {
//     const f = frutta[i];
//     console.log(f);
// }

// alternativa 2 (molto ma molto più bella)
for (const f of frutta) {
    // console.log(f);
}

// console.log(somma(3, 5));
// console.log(mate.sottrazione(4, 9));
// console.log(molt(5, 7));

mate.sommaMultipla(3, 7, 45, 67, 89, 1, 959);
mate.sommaMultipla(3, 7, 45);

// modulo os
import { logHostName, logUserName } from "./es-os";
logHostName();
logUserName();

// modulo url
console.log("=".repeat(20));
import myUrl from "./es-url";
myUrl();

// modulo path
console.log("=".repeat(20));
import myPath from "./es-path";
myPath();

// modulo fs
console.log("|*".repeat(20));
import myFs from "./es-fs";
myFs();

// richieste
console.log("|*".repeat(20));
import { getPosts, getPostSync } from "./richieste";
getPostSync();