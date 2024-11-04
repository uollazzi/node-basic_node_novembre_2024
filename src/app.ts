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
    console.log(f);
}

console.log(somma(3, 5));
console.log(mate.sottrazione(4, 9));
console.log(molt(5, 7));