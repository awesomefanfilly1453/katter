
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyBBKUte1pMdRd3GIYl2Bk7CWRXxusHH3x8",
  authDomain: "kwitter-cb403.firebaseapp.com",
  databaseURL: "https://kwitter-cb403.firebaseio.com",
  projectId: "kwitter-cb403",
  storageBucket: "kwitter-cb403.appspot.com",
  messagingSenderId: "1062608993706",
  appId: "1:1062608993706:web:d30f730c79a7112b5c7fd3",
  measurementId: "G-HRN9VNGKZZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase


var username=localStorage.getItem("username");

document.getElementById("username").innerHTML="Welcome "+username+"";

function addroom()
    {
          roomname=document.getElementById("roomname").value;

        firebase.database().ref("/").child(roomname).update({
purpose:"adding room"
});
     localStorage.setItem("roomname",roomname); 
window.location="kwitter_page.html";
        
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
      });});}
getData();

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}
function redirect(name){
    localStorage.setItem("roomname",name);
    window.location="kwitter_page.html";
}