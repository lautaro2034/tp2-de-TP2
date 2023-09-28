const fs = require("fs").promises;

async function main() {
  try {
    const contenidoStr = await fs.readFile("package.json", "utf8");
    const contenidoObj = JSON.parse(contenidoStr);
    const size = Buffer.byteLength(contenidoStr, "utf8");

    const info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);

    await fs.writeFile("info.txt", JSON.stringify(info, null, "\t"), "utf8");
    console.log("Archivo info.txt guardado correctamente.");
  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
