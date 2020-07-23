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

        return `${year}-${month}-${day}`; 
    } 
}