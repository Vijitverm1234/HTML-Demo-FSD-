
const fs=require('fs');
function readfileA (){try {
 
const data=fs.readFile("dummyA.txt","utf-8",()=>{
    console.log("reading file failed")
});
console.log(data)
} catch (error) {
    console.log("some error occured")
}}
function writefileA(){
    try {
        fs.writeFile("dummyA.txt","learning backend and its 2025",()=>{
            console.log("reading file failed")
        })
    } catch (error) {
        console.log("some problem  occured")
    }
    
}

module.exports={
    writefileA,readfileA
}