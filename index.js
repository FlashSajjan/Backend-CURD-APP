//ppFtPYPV9DRnhDgG mongoDB password
//
import express from 'express'
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import productsRoute from './routes/product.route.js';

//middleware
const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use("/api/products", productsRoute);




app.get("/", (req, res) => {
    res.send("Hellow World");   
});

app.listen(3000);
mongoose.connect("mongodb+srv://sajjanbrahma7:ppFtPYPV9DRnhDgG@cluster0.eft4pqs.mongodb.net/CURD?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log("Connected to MongoDB")
})
.catch(() => {
    console.log("Error connecting to MongoDB")
    }
)

