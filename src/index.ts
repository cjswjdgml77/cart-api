import express from "express";
import Redis from "./service/Redis";
import session from "express-session";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import routerRegister from "./service/routerRegister";

declare module "express-session" {
  export interface SessionData {
    user: {
      id: string;
      cart: { name: string; price: number; qty: number }[] | [];
    };
  }
}

const app = express();
const port = process.env.PORT || 3001;
export const redis = new Redis();
app.use(
  session({
    name: "Session",
    genid: function (req) {
      return uuidv4();
    },
    secret: "jeonghuiC",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 6000 * 60 * 60 * 24 * 30 },
    // cookie: { maxAge: 1000 },
  })
);

// create application/json parser
const jsonParser = bodyParser.json();
app.use(jsonParser);

app.get("/", async (req, res) => {
  if (!req.session.user) {
    req.session.user = {
      id: req.sessionID,
      cart: [],
    };
    try {
      await redis.createCart(req.sessionID);
    } catch (e) {
      res.status(500).send("Internal Server Error");
    }
  }
  res.status(200).send("Created successfully");
});

routerRegister(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
