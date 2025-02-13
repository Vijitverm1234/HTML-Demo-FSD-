const fs=require("fs/promises");
const myReadFile=async()=>{
    try {
        const data= await fs.readFile("dummy.txt",'utf-8')
        console.log(data)
    } catch (erreror) {
        console.log("something went wrong")
    }
}

const mywriteFile=async()=>{
    try {
        await fs.writeFile("dummy.txt","FSD Day 2")
    } catch (err) {
        console.log(err.message)
    }
}
const myappendFile=async()=>{
    try {
     await fs.appendFile("dummy.txt"," FSD Day 2 but appending function")
    } catch (err) {
        console.log(err.message)
    }
}
mywriteFile()
myReadFile()
console.log('\n')
myappendFile()
myReadFile