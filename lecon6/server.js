const http=require('http');
const fs=require('fs');
const server=http.createServer((req, res)=>{
    // console.log("nous venons de recevoir une requette");
    // console.log(req.url, req.method)
    res.setHeader('content', 'text/html' );
    // res.write("<h1>Salut tout le monde</h1>");
    // fs.readFile("./view/index.html", (err, data)=>{
    //     if(err){
    //         console.log(err)
    //     }else{
        
    //         res.end(data)
    //     }
    // })
let path='./view/';
    switch(req.url){
        case "/" :
         path+="index.html";
            break;
        case "/about":

           path+="about.html";
            break;
        default:  
        path+="404.html";
        break;  
       
    }
    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err)
            }else{
            res.end(data)
             }
    })
   
})

server.listen(3000, ()=>{
    console.log("le serveur est en ecoute sur le port 3000"); 
})