const fs = require("fs");

fs.readFile("package.json", "utf8", (err, contenidoStr) => {
  if (err) {
    console.error("Error al leer el archivo:", err.message);
    return;
  }

  const contenidoObj = JSON.parse(contenidoStr);
  const size = Buffer.byteLength(contenidoStr, "utf8");

  const info = {
    contenidoStr,
    contenidoObj,
    size,
  };

  console.log(info);

  fs.writeFile("info.txt", JSON.stringify(info, null, "\t"), "utf8", (err) => {
    if (err) {
      console.error("Error al escribir en el archivo:", err.message);
    } else {
      console.log("Archivo info.txt guardado correctamente.");
    }
  });
});
