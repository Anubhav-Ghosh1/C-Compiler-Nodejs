const path = require("path");
const dirCodes = path.join(__dirname, "..", "codes");
const { v4: uuid } = require("uuid");
const fs = require("fs");
if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, code) => {
  const jobId = uuid();
  const fileName = `${jobId}.${format}`;
  console.log(fileName);
  const filePath = path.join(dirCodes, fileName);
  console.log(filePath);
  await fs.writeFileSync(filePath, code);
  return filePath;
};

module.exports = { generateFile };