import { Router } from "express";

const signinRouter = new Router();

signinRouter.get('/', (req, res) => {
    let { searchDestination, search } = req.query;
    search = search.trim();
    setTimeout(() => {
        res.redirect(`${searchDestination}?search=${search}`);
    }, 500);
});
export default signinRouter;