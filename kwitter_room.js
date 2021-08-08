
var firebaseConfig = {
      apiKey: "AIzaSyBjXLHI0qI9E7mleRipserRE9Y--E_hHjw",
      authDomain: "tictactoe-f66b5.firebaseapp.com",
      databaseURL: "https://tictactoe-f66b5-default-rtdb.firebaseio.com",
      projectId: "tictactoe-f66b5",
      storageBucket: "tictactoe-f66b5.appspot.com",
      messagingSenderId: "1060669644361",
      appId: "1:1060669644361:web:e6845d5294bb7cbb7ce998"
    };
   
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom ()
    {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
    }
    
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
       });
     });
    
    }
    
    getData();
    {
          console.log(name)
          localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
    }
    
    function logout() 
    {
     localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
    }
