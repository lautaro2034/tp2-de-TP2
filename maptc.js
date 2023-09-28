const fs = require("fs").promises;

fs.readFile("package.json", "utf8")
  .then((contenidoStr) => {
    const contenidoObj = JSON.parse(contenidoStr);
    const size = Buffer.byteLength(contenidoStr, "utf8");

    const info = {
      contenidoStr,
      contenidoObj,
      size,
    };

    console.log(info);

    return fs.writeFile("info.txt", JSON.stringify(info, null, "\t"), "utf8");
  })
  .then(() => {
    console.log("Archivo info.txt guardado correctamente.");
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
