const express = require("express");
const routes = express.Router();
const teachers = require("./teachers");

routes.get("/",(req,res)=>{
    return res.redirect("/teachers")
});

routes.get("/teachers", teachers.index);

routes.get("/teacher/register", (req,res)=>{
    return res.render("teachers/teachersRegister");
});

routes.get("/teacher/:id", teachers.show);

routes.get("/teacher/:id/edit", teachers.edit);

routes.post("/teacher", teachers.post)

routes.put("/teacher", teachers.put);

routes.delete("/teacher", teachers.delete);





module.exports = routes;