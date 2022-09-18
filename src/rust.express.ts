import express from "express";
import { Request, Response } from "express"

let app = express()

app.get("/rust", (req: Request, res: Response) => {
    res.send("rust")
})

app.listen(3000)