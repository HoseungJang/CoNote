import { Router, Request, Response, NextFunction } from "express";

const router: Router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.redirect("/main.html");
});

export default router;