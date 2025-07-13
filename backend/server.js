import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import productRouter from "./routes/product.route.js";
import path from "path";

dotenv.config();

const app = express();
const port = 5000;

const __dirname = path.resolve();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRouter);

if (process.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}
app.listen(port, () => {
  connectDB();
  console.log(`server is running on port http://localhost:${port}`);
});
