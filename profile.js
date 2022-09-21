const express = require("express");
const fileRoute = express.Router();

fileRoute.get("/sugeridos",async(req,res)=>{
    let items = [
        {
            "name": "Gafas Redondas",
            "image": "https://ae01.alicdn.com/kf/H355bf87266664d73b311b65472a5d8219/Gafas-De-Sol-redondas-Retro-Para-hombre-y-mujer-lentes-De-Sol-De-estilo-Punk-a.jpg_Q90.jpg_.webp",
            "price": "25"
        },
        {
            "name": "Gafas Azules",
            "image": "https://ae01.alicdn.com/kf/S561625d677aa4fbe9296b044e98ea79eR/Gafas-de-sol-polarizadas-con-espejo-azul-para-hombre-lentes-de-sol-polarizadas-con-rayos-UV.jpg_640x640.jpg",
            "price": "20"
        },
        {
            "name": "Gafas Ray-Ban Amarillas",
            "image": "https://ae01.alicdn.com/kf/H86d97ec8c2004e24bfd8f864f26331c4q/Gafas-De-Sol-redondas-De-estilo-Retro-para-hombre-y-mujer-dise-o-De-marca-unisex.jpg_Q90.jpg_.webp",
            "price": "18"
        }
    ];
    res.json(items);
})

fileRoute.get("/items", async (req, res) => {
    let items = [
        {
            "name": "Gafas Azules",
            "image": "https://ae01.alicdn.com/kf/S561625d677aa4fbe9296b044e98ea79eR/Gafas-de-sol-polarizadas-con-espejo-azul-para-hombre-lentes-de-sol-polarizadas-con-rayos-UV.jpg_640x640.jpg",
            "price": "20"
        },
        {
            "name": "Gafas Rojas",
            "image": "https://ae01.alicdn.com/kf/H229e1ff576764d368dff9dc31907c9c06/Gafas-de-sol-ovaladas-de-dise-ador-para-mujer-y-hombre-lentes-Retro-transparentes-cuadradas-UV400.jpg_Q90.jpg_.webp",
            "price": "10"
        },
        {
            "name": "Gafas Verdes",
            "image": "https://ae01.alicdn.com/kf/Hc8ee35f19be449c99205d792a027e934R/Gafas-de-sol-cuadradas-verdes-Vintage-para-mujer-anteojos-de-sol-rectangulares-de-dise-ador-de.jpg_Q90.jpg_.webp",
            "price": "30"
        },
        {
            "name": "Gafas Redondas",
            "image": "https://ae01.alicdn.com/kf/H355bf87266664d73b311b65472a5d8219/Gafas-De-Sol-redondas-Retro-Para-hombre-y-mujer-lentes-De-Sol-De-estilo-Punk-a.jpg_Q90.jpg_.webp",
            "price": "25"
        },
        {
            "name": "Gafas Cuadradas",
            "image": "https://ae01.alicdn.com/kf/H0514f4ede2ea4d37a937468d297877f5U/Gafas-De-Sol-cuadradas-De-estilo-Retro-Steampunk-para-hombre-y-mujer-lentes-De-dise-ador.jpg_640x640.jpg",
            "price": "42"
        },
        {
            "name": "Gafas Ray-Ban Amarillas",
            "image": "https://ae01.alicdn.com/kf/H86d97ec8c2004e24bfd8f864f26331c4q/Gafas-De-Sol-redondas-De-estilo-Retro-para-hombre-y-mujer-dise-o-De-marca-unisex.jpg_Q90.jpg_.webp",
            "price": "18"
        }
    ];
    res.json(items);
})

module.exports = fileRoute;