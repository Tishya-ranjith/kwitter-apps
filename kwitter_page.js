var firebaseConfig = {
      apiKey: "AIzaSyA3d7Zcrq3w3aL6_a3BHwOwLZK5O6s746g",
      authDomain: "kwtr-f438a.firebaseapp.com",
      databaseURL: "https://kwtr-f438a-default-rtdb.firebaseio.com",
      projectId: "kwtr-f438a",
      storageBucket: "kwtr-f438a.appspot.com",
      messagingSenderId: "70837792400",
      appId: "1:70837792400:web:f4f6f414159cba75127215"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";

}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
