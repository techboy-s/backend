// import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "../.env",
});

//Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => {
    console.log("MongoDB Connection Error", err);
  });

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port : ${process.env.PORT}`);
});
