import express from 'express';

const app = express();
app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Mobile", price: 20000, category: "Electronics" }
];

// GET - All products
app.get("/products", (req, res) => {
    res.json(products);
});

// GET - Product by ID
app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

// POST - Add new product
app.post("/products", (req, res) => {
    const { name, price, category } = req.body;

    const newProduct = {
        id: products.length ? products[products.length - 1].id + 1 : 1,
        name,
        price,
        category
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

// PUT - Update product
app.put("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name;
    product.price = req.body.price;
    product.category = req.body.category;

    res.json(product);
});

// DELETE - Delete product
app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(index, 1);

    res.json({ message: "Product deleted successfully" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});