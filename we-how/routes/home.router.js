import { Router } from "express";

const homeRouter = new Router();

homeRouter.get('/', (req, res) => {
    res.render('master', {
        title: "WebHow-Home",
        layout: "home"
    });
});
export default homeRouter;