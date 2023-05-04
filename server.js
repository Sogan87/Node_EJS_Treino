const express =  require('express');
const app = express();

app.set("view engine","ejs")

app.get("/", function(req, res){
    const items = [
        {   
            title: "D", 
            message: "esenvolver aplicativos"
        },
        {
            title: "E",
            message: "JS usa JavaScript"
        },
        {
            title: "M",
            message: "uito Facil"
        },
        {
            title: "A",
            message: "mor pelo Javascript"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "intax simples"
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