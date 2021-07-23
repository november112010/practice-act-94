 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAQ85OULSRDSXqdjt86T4w8UTrwz9G77wg",
    authDomain: "kwitter-37e1e.firebaseapp.com",
    databaseURL: "https://kwitter-37e1e-default-rtdb.firebaseio.com",
    projectId: "kwitter-37e1e",
    storageBucket: "kwitter-37e1e.appspot.com",
    messagingSenderId: "55787946599",
    appId: "1:55787946599:web:d9d9ca1326e68c52ae4ac2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adding_user"});
  }
