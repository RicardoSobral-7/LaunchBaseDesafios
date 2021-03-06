const fs = require("fs");
const data = require("../data.json");
const {age, graduation, date} = require("../utils");

exports.index = (req,res)=>{
    let teachers = data.teachers.map( teacher =>{
        const newTeacher = {
            ...teacher,
            subjects: teacher.subjects.split(",")
        }
        return newTeacher;
    });


    return res.render("teachers/index", {teachers});
}

exports.create = (req,res)=>{
    return res.render("teachers/teachersRegister");
};

exports.show = (req,res) => {
    const {id} = req.params;

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id;
    });
    const teacher = {
        ...foundTeacher,
        graduation: graduation(foundTeacher.graduation),
        age: age(foundTeacher.birth),
        subjects: foundTeacher.subjects.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.create_at)
    }
    return res.render("./teachers/show",{teacher});
}

exports.post = (req,res) => {
    const keys = Object.keys(req.body);
    
    for(key of keys){
        if(req.body[key] == ""){
            return res.send("Por favor preencha todos os dados");
        }
    }

    let {avatar_url, name, birth, graduation, typeEducation, subjects} = req.body;

    birth = Date.parse(birth);
    const create_at = Date.now();
    let id = 1;
    const lastTeacher = data.teachers[data.teachers.length - 1];
    if(!lastTeacher){
        id = lastTeacher + 1;
    }
        
    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        graduation,
        typeEducation,
        subjects,
        create_at
    });

    fs.writeFile("data.json", JSON.stringify(data, null, 2),function (err){
        if(err){
            return res.send("Write file error!");
        }
        return res.redirect("teachers");
    });
}

exports.edit = (req,res) => {
    const {id} = req.params;

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id;
    });

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).iso
    }


    return res.render("teachers/edit",{teacher});
}

exports.put = (req,res) => {
    const {id} = req.body;
    let index = 0;

    const foundTeacher = data.teachers.find(function(teacher, foundIndex){
        if(id == teacher.id){
            index = foundIndex;
            return true;
        }
    });
    if(!foundTeacher){
        return res.send("Teacher not found!");
    }
    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }
    data.teachers[index] = teacher;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if(err){
            return res.send("Write error detected, contact the suport");
        }
        return res.redirect(`/teachers/${id}`);
    });
}

exports.delete = (req,res) =>{
    const {id} = req.body;

    const filteredTeachers = data.teachers.filter((teacher)=>{
        return teacher.id != id;
    });
    data.teachers = filteredTeachers;

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function (err){
        if(err){
            return res.send("Write file error!");
        }
        return res.redirect("/teachers");
        
    })
}