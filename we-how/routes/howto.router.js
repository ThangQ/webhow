import { Router } from "express";

const howtoRouter = new Router();

howtoRouter.get('/', (req, res) => {
    res.render('master', {
        title: "WebHow-How to",
        layout: "howto"
    });
});
export default howtoRouter;