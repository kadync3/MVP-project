var $post = $('<div class="post"></div>');


var $img = $("<img>");

;

$post.append($img);
$(".feed").append($post);

// var settings = {
//   url: "http://localhost:8000/",
//   method: "GET",
//   timeout: 0,
// };
var userData;
function getUsers (){
fetch("http://localhost:8000/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  userData = data
  });
  };

var exerciseData;
function getExercises (){
  fetch("http://localhost:8000/exercises")
  .then((response) => response.json())
  .then((data) => {
   console.log(data)
   exerciseData = data
    });
  };

function createWorkout(){
  var search1 = $('#muscle-group').val()
  var search2 = $('#lvl').val()
  if (search1 == 'chest' && search2 == 1){
    var exe = exerciseData.slice(0,4)
    for (let x of exe){
      var $workOut = $(`<div class="workout" >${x.name}</div>`);  
      $post.append($workOut)
    }
  }  else if (search1 == 'chest' && search2 == 2) {
    var exe = exerciseData.slice(15,19)
    for (let x of exe){
      var $workOut = $(`<div class="workout" >${x.name}</div>`);  
      $post.append($workOut)
    }
  }  else if (search1 == 'chest' && search2 == 3) {
    var exe = exerciseData.slice(30,34)
    for (let x of exe){
      var $workOut = $(`<div class="workout" >${x.name}</div>`);  
      $post.append($workOut)
    }
  }  else if (search1 == 'back' && search2 == 1) {
    var exe = exerciseData.slice(5,9)
    for (let x of exe){
      var $workOut = $(`<div class="workout" >${x.name}</div>`);  
      $post.append($workOut)
    }
  }  else if (search1 == 'back' && search2 == 2) {
    var exe = exerciseData.slice(20,24)
    for (let x of exe){
      var $workOut = $(`<div class="workout" >${x.name}</div>`);  
      $post.append($workOut)
    }
  }  else if (search1 == 'back' && search2 == 3) {
    var exe = exerciseData.slice(35,39)
    for (let x of exe){
      var $workOut = $(`<div class="workout" >${x.name}</div>`);  
      $post.append($workOut)
    }
  }  else if (search1 == 'legs' && search2 == 1) {
    var exe = exerciseData.slice(10,14)
    for (let x of exe){
      var $workOut = $(`<div class="workout" >${x.name}</div>`);  
      $post.append($workOut)
    }
  }  else if (search1 == 'legs' && search2 == 2) {
    var exe = exerciseData.slice(25,29)
    for (let x of exe){
      var $workOut = $(`<div class="workout" >${x.name}</div>`);  
      $post.append($workOut)
    }
  }  else if (search1 == 'legs' && search2 == 3) {
    var exe = exerciseData.slice(40,45)
    for (let x of exe){
      var $workOut = $(`<div class="workout" >${x.name}</div>`);  
      $post.append($workOut)
    }
  }   
  
}
function createUserDiv (){
  var currentUser = $('#log-in').val()
  var $userInfo = $(`<div class="userInfo">${currentUser}</div>`);
  $post.append($userInfo);
}
getUsers()
getExercises()
