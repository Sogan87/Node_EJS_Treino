const express =  require('express');
const app = express();

app.set("view engine","ejs")

app.get("/", function(req, res){
    const items = [
        {   
            title: "D ", 
            message: "Desenvolver aplicativos"
        },
        {
            title: "E ",
            message: "EJS usa JavaScript"
        },
        {
            title: "M ",
            message: "Muito Facil"
        },
        {
            title: "A ",
            message: "Amor pelo Javascript"
        },
        {
            title: "I ",
            message: "Install EJS"
        },
        {
            title: "S ",
            message: "Sintax simples"
        }
    ];
    res.render("pages/index",{
        qualitys: items,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about"); 
})

app.listen(8080);
console.log("rodando")