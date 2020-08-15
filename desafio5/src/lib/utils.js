module.exports = {
    age: function(timestamp){
        const today = new Date();
        const birthDate = new Date(timestamp);
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();



        if(month <= 0 && today.getDate() <= birthDate.getDate() ){
            age = age - 1;
        }
        return age;
    },
    graduation: function(graduation){
        let grad = "" 

        switch(graduation){
            case "Ensino_Medio_Completo": {
                grad = "Ensino médio completo"; 
                break;    
            }
            case "Ensino_Superior_Completo":{
                grad = "Ensino Superior Completo";
                break;
            }
            case "Mestrado&Doutorado":{
                grad = "Mestrado ou Doutorado";
                break;
            }
            default:
                grad = "ERROR (Graduation not found)";
        }
        return grad;
    },
    date: function(timestemp){
        const date = new Date(timestemp);

        const year = date.getUTCFullYear();
        const month = `0${date.getUTCMonth() + 1}`.slice(-2);
        const day = `0${date.getUTCDate()}`.slice(-2);

        return  {
                day, 
                month, 
                year,
                iso:`${year}-${month}-${day}`,
                bithDay: `${day}/${month}`,
                format: `${day}/${month}/${year}`,
                formatT:`${month}`
            } 
    },
    grade: function(scholarYear){
        let currentScholarYear = "";
        switch (scholarYear){
            case "1":
                currentScholarYear = "1º Ensino médio";
            break;
            case "2":
                currentScholarYear = "2º Ensino médio";
            break;
            case "3":
                currentScholarYear = "3º Ensino médio";
            break;
            case "5":
                currentScholarYear = "5º Ensino Fundamental";
            break;
            case "6":
                currentScholarYear = "6º Ensino Fundamental";
            break;
            case "7":
                currentScholarYear = "7º Ensino Fundamental";
            break;
            case "8":
                currentScholarYear = "8º Ensino Fundamental";
            break;
            case "9":
                currentScholarYear = "9º Ensino Fundamental";
            break;
            default:
                currentScholarYear = "Current Scholar Year not found!"
        }
        return currentScholarYear;
    }

}