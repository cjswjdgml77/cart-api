import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});