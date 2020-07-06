const express = require("express");
const courses = require("./data")
const routes = express.Router();



routes.get("/", (req,res)=>{
    return res.render("about");
});

routes.get("/admin",(req,res)=>{
    return res.render("admin")
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



module.exports = routes;