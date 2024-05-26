const express = require("express")
const app = express()
const port = 3000
const cors = require('cors')

// Configurez CORS pour autoriser l'origine spécifiée

const corsOptions = {
    origin: 'http://localhost:5173', // Remplacez par votre origine autorisée
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions))

app.get("/api",(req,res) => {
    res.json({"users": ["userOne","userTwo"]})
})
app.listen(port,() =>{
    console.log(`serveur lancé....${port}`);
})