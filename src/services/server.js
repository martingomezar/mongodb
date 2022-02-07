import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import mainRouter from "../routes";
import MongoStore from "connect-mongo";
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const username = "admin";
const password = "Vale7220";

const myURI = `mongodb+srv://${username}:${password}@cluster0.cyate.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: myURI,
    mongoOptions: advancedOptions,
  }),

  secret: "secret",
  resave: false,
  saveUninitialized: false,
};

const app = express();
app.use(cookieParser());
app.use(session(StoreOptions));

app.use("/api", mainRouter);

export default app;
