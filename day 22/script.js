// function login(vibha) {
//     // set of code
//     alert( `welcome vibha`);
// }
// login("vibha");
// console.log( outsidefunction)

// function addTodo(){
//     //set of code 
//     var gettingTodos = document.getElementById( 'todosHere') .value;
//     console.log(gettingTodos, "gettingTodos");
//     alert ('Added')
// }

function addTodo(){
    var gettingTodos = document.getElementById( 'todosHere') .value;
    if (gettingTodos){
        var myTodosFromLS = JSON.parse(localStorage.getItem("todos")) || [];
        myTodosFromLS.push(gettingTodos);
        console.log(myTodosFromLS,"myTodosFromLS");
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS))
        document.getElementById('todosHere').value = "";
        alert("Todo added !")
    }
    else{
        alert('Add todo first,before submitting !');
    }
}