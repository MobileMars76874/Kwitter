
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDu9XZnnZYkADnoHaIVyISXvU-Zkwv9gBk",
    authDomain: "kwitter-67d82.firebaseapp.com",
    databaseURL: "https://kwitter-67d82-default-rtdb.firebaseio.com",
    projectId: "kwitter-67d82",
    storageBucket: "kwitter-67d82.appspot.com",
    messagingSenderId: "1076633661803",
    appId: "1:1076633661803:web:a382570a9d8525b67c9c2e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);




  var username = localStorage.getItem("Username");
  document.getElementById("Welcome").innerHTML = "Welcome - "+username;



  function add_room_name(){
  var Room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_name).update({
      purpose : "Adding_roomname"
  });
  localStorage.setItem("room_name", Room_name);
  window.location = "kwitter_page.html";
  }










  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
     //Start code
    row = "<div class='room_name' id="+Room_names+ "onclick='redirecttoroom(this.id)>#"+Room_names+"</div><hr>'";
    document.getElementById("output").innerHTML += row;
    // x+=2 is same as x=x+2
     //End code
     });});}
    
getData();

function redirecttoroom(name){
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}


function logout(){
localStorage.removeItem("Username");
localStorage.removeItem("room_name");
window.location = "index.html";
}
  



