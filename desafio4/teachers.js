const fs = require("fs");
const data = require("./data.json");
const {age, graduation, date} = require("./utils");

exports.show = (req,res) =>{
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
    const id = Number(data.teachers.length + 1);
    
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
        return res.redirect("teacher");
    });
}

exports.edit = (req,res) => {
    const {id} = req.params;

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id;
    });

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }


    return res.render("teachers/edit",{teacher});
}