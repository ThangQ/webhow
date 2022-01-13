import { Router } from "express";

const livecodingRouter = new Router();

livecodingRouter.get('/', (req, res) => {
    res.render('master', {
        title: "WebHow-Live coding",
        layout: "livecoding"
    });
});
export default livecodingRouter;