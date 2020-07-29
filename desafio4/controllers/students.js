const fs = require("fs");
const data = require("../data.json");
const {date, grade} = require("../utils");

exports.index = (req,res)=>{

    return res.render("students/index", {students: data.students});
}

exports.create = (req,res)=>{
    return res.render("students/studentsRegister");
};

exports.show = (req,res) => {
    const {id} = req.params;

    const foundStudent = data.students.find(function(student){
        return student.id == id;
    });
    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).bithDay,
    }
    return res.render("./students/show",{student});
}

exports.post = (req,res) => {
    const keys = Object.keys(req.body);
    
    for(key of keys){
        if(req.body[key] == ""){
            return res.send("Por favor preencha todos os dados");
        }
    }


    birth = Date.parse(req.body.birth);
    workload = Number(req.body.workload);
    let id = 1; 
    const lastStudent = data.students[data.students.length - 1];
    if(lastStudent){
        id = lastStudent + 1;
    }
    
    data.students.push({
        id,
       ...req.body,
       workload,
       scholarYear: grade(req.body.scholarYear),
        birth
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2),function (err){
        if(err){
            return res.send("Write file error!");
        }
        return res.redirect("/students");
    });
}

exports.edit = (req,res) => {
    const {id} = req.params;

    const foundStudent = data.students.find(function(student){
        return student.id == id;
    });

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }


    return res.render("students/edit",{student});
}

exports.put = (req,res) => {
    const {id} = req.body;
    let index = 0;

    const foundStudent = data.students.find(function(student, foundIndex){
        if(id == student.id){
            index = foundIndex;
            return true;
        }
    });
    if(!foundStudent){
        return res.send("Student not found!");
    }
    const student = {
        ...foundStudent,
        ...req.body,
        scholarYear: grade(req.body.scholarYear),
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id),
        workload: Number(req.body.workload)
    }
    data.students[index] = student;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send("Write error detected, contact the suport");
        }
        return res.redirect(`/students/${id}`);
    });
}

exports.delete = (req,res) =>{
    const {id} = req.body;

    const filteredStudents = data.students.filter((student)=>{
        return student.id != id;
    });
    data.students = filteredStudents;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err){
        if(err){
            return res.send("Write file error!");
        }
        return res.redirect("/students");
        
    })
}