
const fs=require('fs');
function readfile (){try {
 
const data=fs.readFileSync("dummy1.txt","utf-8");
console.log(data)
} catch (error) {
    console.log("some error occured")
}}
function writefile(){
    try {
        fs.writeFileSync("dummy1.txt","learning backend and its 2025")
    } catch (error) {
        console.log("some problem  occured")
    }
    
}

module.exports={
    writefile,readfile
}