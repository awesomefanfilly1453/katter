//YOUR FIREBASE LINKS
const firebaseConfig = {
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
var username=localStorage.getItem("username");
var roomname=localStorage.getItem("roomname");

function send(){
var msg=document.getElementById("sendthemsg").value;
    firebase.database().ref(roomname).push({
        name:username,
        message:msg,
        like:0
    });
    document.getElementById("sendthemsg").value="";
}

function getData()
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
//getData();
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html";
}