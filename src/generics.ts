// this.http.get<Post[]>("htp://...")

type Frutta = {
    nome: string;
    vitamina: "B" | "C";
}

let frutta = Array<Frutta>();
frutta.push({ nome: "Limone", vitamina: "C" }, { nome: "Mela", vitamina: "B" });
