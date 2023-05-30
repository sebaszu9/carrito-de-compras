const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./database/index");
const controllers = require("./controllers");

const app = express();

app.use(cors());
app.use(express.json());

//Conexion base de datos
dbConnection();

/* GET */
app.get("/products", controllers.getProducts);
app.get("/products-cart", controllers.getProductsCart);

/* POST */
app.post("/products-cart", controllers.addProductCart);
app.post("/add-product", controllers.addProduct);

/* PUT */
app.put("/products-cart/:productId", controllers.putProduct);

/* DELETE */
app.delete("/products-cart/:productId", controllers.deleteProduct);

app.listen(4000, () => {
  console.log("Server funcionando en el puerto 4000");
});

module.exports = app;
