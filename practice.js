
//ADD YOUR FIREBASE LINKS
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

function practice_add_user(){
var User_Name = document.getElementById("practice_username").value;
firebase.database().ref("/").child(User_Name).update({
purpose : "Adding_User"
});
}
