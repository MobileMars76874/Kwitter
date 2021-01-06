function add_user(){
var username = document.getElementById("username").value;
localStorage.setItem("Username", username);

window.location = "kwitter_room.html";
}