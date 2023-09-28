const fs = require("fs");

try {
  const contenidoStr = fs.readFileSync("package.json", "utf8");
  const contenidoObj = JSON.parse(contenidoStr);
  const size = Buffer.byteLength(contenidoStr, "utf8");

  const info = {
    contenidoStr,
    contenidoObj,
    size,
  };

  console.log(info);

  fs.writeFileSync("info.txt", JSON.stringify(info, null, "\t"), "utf8");
} catch (error) {
  console.error("Error:", error.message);
}
