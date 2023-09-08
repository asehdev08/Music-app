const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("views"));

app.get('/',(req,res) =>{
    res.render("index.ejs")
})

app.listen(4000,()=>{
    console.log("listening on post 4000")
})