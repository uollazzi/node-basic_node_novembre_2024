export const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            // 1. Risposta OK

            // 2. estrapolo il body
            res.json()
                .then(dati => {
                    console.log(dati[0]);
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log("ERRORE:", err));

    console.log("Operazione terminata.");
}

export const getPostSync = async () => {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let dati = await res.json();
        console.log(dati[0]);
        console.log("Operazione terminata.");
    } catch (err) {
        console.log("ERRORE:", err)
    }
}

