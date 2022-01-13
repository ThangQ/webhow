import { Router } from "express";

const blogRouter = new Router();

blogRouter.get('/', (req, res) => {
    res.render('master', {
        title: "WebHow-Blog",
        layout: "blog"
    });
});
export default blogRouter;