const fs = require("fs")

//readfile

// fs.readFile("./abc.txt",(error,data)=>{
//   if(error){
//    console.log("error")
//    console.log(error)
//   }
//   else{
//     console.log(data.toString())
//   }
// });
// console.log("terminated")

//WriteFile

// let content = "Wow this is dynamic content"
// fs.writeFile("new_file.txt",content,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("saved")
//     }
// })


//appendFile

// fs.appendFile("./abc.txt","\n new content",(err)=>{

//     if(err){
//         console.log("Error "+err)
//     }else{
//         console.log("saved")
//     }

// })

//deleteFile

fs.unlink("./abc.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("deleted")
    }
})