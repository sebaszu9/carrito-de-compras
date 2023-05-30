const { response } = require('express');
const Product = require("../model/Product");

const addProduct = async (req, res = response) => {
    const { name, img, price } = req.body;
    
    try {
        
        /* Nos fijamos si tenemos el producto */
        let product = await Product.findOne({ name });

        /* Si no tenemos el producto */
        if (product) {
          res.status(400).json({
            mensaje: "Este producto se encuentra en nuestra base de datos",
          });
      
          /* Si nos envian algo y no esta en el carrito lo agregamos */
        } 

        product = new Product( req.body );
        await product.save();

        res.status(201).json({
            ok: true,
            msg: 'Producto agregado exitosamente'
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
  
  };
  
  module.exports = addProduct;