const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const outputFilePath = path.join(__dirname, "..", "outputs");

if (!fs.existsSync(outputFilePath)) {
  fs.mkdirSync(outputFilePath, { recursive: true });
}

const executeCpp = async (filePath) => {
  const id = path.basename(filePath).split(".")[0]; // will return file name without extension
  const outputPath = path.join(outputFilePath, `${id}.out`);
  console.log(id, "outputPath: ", outputPath);

  return new Promise((resolve, reject) => {
    // Quote the file paths to handle spaces
    const command = `g++ "${filePath}" -o "${outputPath}" && "${outputPath}"`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("Execution error:", error);
        reject({ error, stderr });
        return;
      }
      if (stderr) {
        console.error("Standard error output:", stderr);
        reject(stderr);
        return;
      }
      resolve(stdout);
    });
  });
};

module.exports = { executeCpp };
