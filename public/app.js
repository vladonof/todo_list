/* global $ - this line does nothing, just to remove errors from AWS IDE */
$(document).ready(function(){
  $.getJSON("/api/todos")
  .then(addTodos)
   
  $('#todoInput').keypress(function(event){
    if(event.which == 13){
      createTodo();
    }
  });
  
  $('.list').on('click', 'span', function(event){
    event.stopPropagation();
    removeTodo($(this).parent());
  });
  
  $('.list').on('click', 'li', function(){
    updateTodo($(this));
  });
});


function addTodos(todos){
  //add todos to page here, then
  //loop through each todo and take the name 
  //and append that to the page as a list item
  todos.forEach(function(todo){
    addTodo(todo);
  });
}

function addTodo(todo){
  var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  if(todo.completed){
    newTodo.addClass("done");
  }
  $('.list').append(newTodo);
}

function createTodo(){
  //send requests to create new todo
  //to '/api/todos'
  var usrInput = $('#todoInput').val();
  $.post('/api/todos', {name: usrInput})
  .then(function(newTodo){
    $('#todoInput').val('');
    addTodo(newTodo);
  })
  .catch(function(err){
    console.log(err);
  });
}

function removeTodo(todo){
  var clickedId = todo.data('id');
  var deleteUrl = '/api/todos/' + clickedId;
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
  .then(function(data){
    todo.remove();
  })
  .catch(function(err){
    console.log(err);
  });
}

function updateTodo(todo){
  var updateUrl = '/api/todos/' + todo.data('id');
  var isDone = !todo.data('completed');
  var updateData = {completed: isDone}
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
  .then(function(updatedTodo){
    todo.toggleClass("done");
    todo.data('completed', isDone); 
  });
}