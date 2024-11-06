import path from "node:path";

export default () => {
    const dir = "C:\\Progetti\\Tutorials\\LAB4T\\NODE\\novembre_2024";
    const adesso = new Date();
    const anno = adesso.getFullYear();
    const file = "file.txt";

    // C:\Progetti\Tutorials\LAB4T\NODE\novembre_2024\2024\file.txt
    // const f = dir + "\\" + anno.toString() + "\\" + file;

    const filePath = path.join(dir, anno.toString(), file);
    console.log(filePath);

    const filePath2 = "C:\\Progetti\\Tutorials\\LAB4T\\NODE\\novembre_2024\\albero.jpg";
    console.log(path.basename(filePath2));
}