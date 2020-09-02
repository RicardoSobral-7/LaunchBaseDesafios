const {date} = require("../../lib/utils");
const Student = require("../models/student");


module.exports = {
    index(req,res) {
        Student.all(function(students){
            return res.render("students/index", {students});
        });
    },

    create(req,res) {
        Student.teacherSelectOptions(function(options){ 
            return res.render("students/studentsRegister",{teachersOptions: options});
        });
    },

    post(req,res) {
        const keys = Object.keys(req.body);
        
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Por favor preencha todos os dados");
            }
        }
        Student.create(req.body, function(student){
            return res.redirect(`/students/${student.id}`);
        });
    },

    show(req,res) {
        Student.find(req.params.id, function(student){
            if(!student) return res.send("Student not found!");
            student.birth = date(student.birth).bithDay;
            return res.render("students/show",{student});
        });
    },
    edit(req,res) {
        Student.find(req.params.id, function(student){
            if(!student) return res.send("Student not found!");

            student.birth = date(student.birth).iso;

            Student.teacherSelectOptions(function(options){
                return res.render("students/edit",{student, teachersOptions: options});
            });
        });
    },

    put(req,res) {
        const keys = Object.keys(req.body);
        
        for(key of keys){
            if(req.body[key] == ""){
                return res.send("Por favor preencha todos os dados");
            }
        }
        Student.update(req.body, function(){
            return res.redirect(`students/${req.body.id}`);
        });
        
    },

    delete(req,res){   
        Student.delete(req.body.id, function(){
            return res.redirect("/students");
        }); 
    }
}