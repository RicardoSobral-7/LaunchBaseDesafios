const express = require("express");
const courses = require("./data")
const routes = express.Router();
const teachers = require("./teachers")



routes.get("/", (req,res)=>{
    return res.render("about");
});

routes.get("/admin",(req,res)=>{
    return res.redirect("/teacher")
});

routes.get("/content",(req,res)=>{
    return res.render("content",{coursesCard: courses});
});

routes.get("/course/:id", (req,res)=>{
    const id = req.params.id;
    const course = courses.find((course)=>{
        return course.id == id;
    });
    if(!course){
        return res.send("Course not found!")
    }
    return res.render("course", {item: course});
});

routes.get("/teacher", (req,res)=>{
    return res.render("teachers/teacher");
});

routes.get("/teacher/register", (req,res)=>{
    return res.render("teachers/teachersRegister");
});

routes.get("/teacher/:id", teachers.show);

routes.get("/teacher/:id/edit", teachers.edit);


routes.post("/teacher", teachers.post)




module.exports = routes;