var $post = $('<div class="post"></div>');
var $workOut = $('<div class="workout">work out info</div>');
var $userInfo = $('<div class="userInfo"> user info</div>');
var $img = $("<img>");

$post.append($workOut);
$post.append($userInfo);
$post.append($img);
$(".feed").append($post);

// var settings = {
//   url: "http://localhost:8000/",
//   method: "GET",
//   timeout: 0,
// };
var userData;
var exerciseData; 
function getUsers (){
fetch("http://localhost:8000/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      // console.log(element);
      userData = element
    });
  });
};
getUsers()
function getExercises (){
  fetch("http://localhost:8000/exercises")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      // console.log(element);
      exerciseData = element
    });
  });
};
getExercises()
console.log(userData)
console.log(exerciseData)