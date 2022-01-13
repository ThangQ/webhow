import express from "express";
import session from "express-session";
import google from 'googleapis';
import dotenv from "dotenv";
dotenv.config();
import homeRouter from "./routes/home.router.js";
import blogRouter from "./routes/blog.router.js";
import howtoRouter from "./routes/howto.router.js";
import searchRouter from "./routes/search.router.js";
import livecodingRouter from "./routes/livecoding.router.js";
// ! DECLARE
const PORT = process.env.PORT || 5000;
const APP = express();


// ! SETUP
APP.use(session({
    secret: "webhow",
    proxy: true,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 600000 }
}));
APP.set('view engine', 'ejs');
APP.set('views', './views');

APP.use(express.static('./public'));
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());


// * ROUTES
APP.use('/', homeRouter);
APP.use('/community', blogRouter);
APP.use('/howto', howtoRouter);
APP.use('/search', searchRouter);
APP.use('/live-coding', livecodingRouter);

APP.listen(PORT, () => console.log(`http://localhost:${PORT}`));
