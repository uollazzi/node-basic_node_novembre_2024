import { URL, URLSearchParams } from "node:url";

export default () => {
    const urlString = "https://www.example.com/cucina/2023/9?query=123&sort=ascending&nome=mario&anno=2024&apiKey=jkdkjd8jnsdf9898sdfkj";
    const parsedUrl = new URL(urlString);



    console.log("host:", parsedUrl.host);
    console.log("path:", parsedUrl.pathname);
    console.log("queryString:", parsedUrl.searchParams);
    console.log("sort:", parsedUrl.searchParams.get("sort"));
    console.log("query:", parsedUrl.searchParams.get("query"));

    const baseUrl = "https://www.amazon.it";
    const path = "/prodotti";
    const qs = { "category": "cucina", "page": "1", "pageSize": "20" };

    const constructedUrl = new URL(path, baseUrl);
    constructedUrl.search = new URLSearchParams(qs).toString();

    console.log(constructedUrl.href);


}
