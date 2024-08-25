# C++ Nodejs Compiler
The C++ Nodejs Compiler is a npm package that let's user to accept code and format (language) as an input and store it along with returning the result.
Along with C++ there will be support for more languages in the future.
<br>
<br>
[![npm version](https://badge.fury.io/js/cpp-nodejs-backend.svg)](https://badge.fury.io/js/cpp-nodejs-backend)
## Usage
```
const { generateFile, executeCpp } = require("cpp-nodejs-backend");

const runTest = async () => {
  try {
    const filePath = await generateFile("cpp", `#include <iostream>
int main() { std::cout << "Hello, World!"; return 0; }`);

    const output = await executeCpp(filePath);
    console.log("Output:", output);
  } catch (err) {
    console.error("Error during execution:", JSON.stringify(err, null, 2));
  }
};

runTest();
```

## About 
Hi, I am Anubhav Ghosh passionate C++ and MERN Stack developer.
[Leetcode/Anubhav_03](https://leetcode.com/u/Anubhav_03/)
[Linkedin/anubhav-ghosh11](https://www.linkedin.com/in/anubhav-ghosh11/)
