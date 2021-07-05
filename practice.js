
//ADD YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCNjjGk-SRr1OubdAtZyaOPp4HQkvwqEdA",
    authDomain: "kwitter-app-86934.firebaseapp.com",
    databaseURL: "https://kwitter-app-86934-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-86934",
    storageBucket: "kwitter-app-86934.appspot.com",
    messagingSenderId: "863228820124",
    appId: "1:863228820124:web:7c2d4f87dcef7c87c20b59"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      });
  }