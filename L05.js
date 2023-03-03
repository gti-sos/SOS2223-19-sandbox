//en package.json se hace el estart y se apunta al fichero que se uiere ejecutar

var express = require("express");
var cool = require("cool-ascii-faces");

var app = express();
var port = process.env.port || 1234;

app.get("/faces", (req,res) => {
    res.send(cool());
    console.log(cool());
})

app.listen(port,() => {
    console.log(`server ready in ${port}`);
})



//hacer npm install para instalar todos los modulos que no estan instalados en local 
//¡¡¡¡HACERLO SIEMPRE QUE HACEMOS PULL PARA ABRIR EL REPOSITORIO!!!! 