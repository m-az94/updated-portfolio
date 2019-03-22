//---- API Key firebase


   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyAmE3v-l8VnrlTMnkqnw34Nr3ChSkOqof8",
    authDomain: "bootcamp-portfolio-assignment.firebaseapp.com",
    databaseURL: "https://bootcamp-portfolio-assignment.firebaseio.com",
    projectId: "bootcamp-portfolio-assignment",
    storageBucket: "bootcamp-portfolio-assignment.appspot.com",
    messagingSenderId: "4377685241"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database
 var database = firebase.database();



  //----- Add Train Form ------
  //when submit button is clicked, the following code will occur
  $("#submit").on("click", function(){

    // inputs are stored in the variables declared above
    var name=$("#name").val().trim();
    var email=$("#email").val().trim();
    var message=$("#message").val().trim();

var contacts={
    name: name,
    email: email,
    message: message
}
database.ref().push(contacts);
});