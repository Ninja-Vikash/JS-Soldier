

import fs from "fs"

const data = `console.log("Hello World")`

fs.appendFile("hello.js", data, () => {
    console.log("File created!")
})


