// const express=require('express');

// const app=express();
// app.listen(3005);

// app.get('/contact', (req,res)=>{
//     res.sendFile('./view/contact.html', {root:__dirname});
// })
// app.get('about' ,(req, res)=>{
// res.sendFile('./view/about.html', {root:__dirname})
// })


const express=require('express');
const path=require('path');
const app=express();
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// const port=3003;
// app.listen(3000);
// app.get("/contact", {root:__dirname});
app.get('/', (req, res)=>{
    // res.sendFile('./view/index.html', {root:__dirname});
    let titre="accueil"
    res.render('index', {titre})
});
app.get('/about', (req, res)=>{
    // res.sendFile('./view/about.html', {root:__dirname});
    res.render('index')
})
app.get('/contact', (req, res)=>{
    res.render('contact')
})

app.use((req, res)=>{
    
    res.render(404)
})
app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
 
})