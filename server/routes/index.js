const express=require("express")
 const router=express.Router()

 router.get("/elevi",elev.getAll)

 router.get("/elevi/:id",elev.getOne)

 router.post("/elevi",elev.addOne)