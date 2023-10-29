const express = require('express');

const PORT = 5000;

const app = express();
const productRoutes = require("./route");

app.use("/api/products", productRoutes);

app.use(express.json());

app.get('/', (req, res) => {
	res.send('hello World');
})

app.listen(PORT);
console.log(`Running on port ${PORT}`);