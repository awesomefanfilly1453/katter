
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCB2_qrbbMgPI8g2xs_fXV_rUBZFNcV9AI",
  authDomain: "flitter-7f8f2.firebaseapp.com",
  databaseURL: "https://flitter-7f8f2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "flitter-7f8f2",
  storageBucket: "flitter-7f8f2.appspot.com",
  messagingSenderId: "800644164248",
  appId: "1:800644164248:web:bcafa21e94711d40cbbeed",
  measurementId: "G-Z5V27KSZ0T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username+"";

function adduser()
    {
        firebase.database().ref("/").child(username).update({
purpose:"adding user"
});
    }
function addroom()
    {
roomname=localStorage.setItem("roomname",roomname);
        firebase.database().ref("/").child(username).update({
purpose:"adding room"
});
        roomname=document.getElementById("roomname").innerHTML;
window.location="kwitter_page.html";
        
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
