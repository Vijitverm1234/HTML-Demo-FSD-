const fs=require("fs/promises");
function myReadFile(){
    try {
        const data=fs.readFile("dummy.txt",'utf-8')
        data.then((res)=>{
            console.log("file data " , res)
        }).catch((err)=>{
         throw err;
        })
    } catch (erreror) {
        console.log("something went wrong")
    }
}

function mywriteFile(){
    try {
        fs.writeFile("dummy.txt","FSD Day 2").catch((err)=>{
         throw err;
        })
    } catch (err) {
        console.log(err.message)
    }
}
function myappendFile(){
    try {
        fs.appendFile("dummy.txt"," FSD Day 2 but appending function").catch((err)=>{
         throw err;
        })
    } catch (err) {
        console.log(err.message)
    }
}
mywriteFile()
myReadFile()
console.log('\n')
myappendFile()
myReadFile