const express=require('express');

const app=express();
app.listen(3005);

app.get('/contact', (req,res)=>{
    res.sendFile('./view/contact.html', {root:__dirname});
})
app.get('about' ,(req, res)=>{
res.sendFile('./view/about.html', {root:__dirname})
})