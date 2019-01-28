$(document).ready(function(){
    //On click of login, get the username and password
    //FOR NOW, ANY EMAIL AND PASSWORD WILL BE ACCEPTED AND LOG
    //THE USER IN
    $("#submitBtn").click(function(){
       console.log("Login button clicked");

       var email = document.getElementById("emailField").value;
       var password = document.getElementById("passwordField").value;
     

    
       if (email == 'admin@ucsd.edu' && password == "Rp9n76x%"){
           console.log("Let him in");
          
           window.location.href='about.html';
       }
       else{
           //Error Message here
           alert("Invalid username or password");

       }


    });

});