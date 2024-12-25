// import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import dotenv from "dotenv";

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
