import express from "express";
import Redis from "./service/Redis";

const app = express();
const port = process.env.PORT || 3001;
const redis = new Redis();

app.get("/", async (req, res) => {
  res.send("d");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
