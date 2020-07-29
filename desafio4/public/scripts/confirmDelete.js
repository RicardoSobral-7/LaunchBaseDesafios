const formDelete = document.querySelector("#form-delete");
formDelete.addEventListener("submit", function(event){
    const confirmation = confirm("Deseja realmente deletar este perfil?");
    if(!confirmation){
        event.preventDefault();
    }
});