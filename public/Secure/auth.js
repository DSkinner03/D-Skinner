

var message = document.getElementById('message')

function Login(){
  var email = document.getElementById('fb_email').value;
  var password = document.getElementById('fb_pass').value;
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {

    // Signed in
    // ...

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        // ...
        window.location.href="https://d-skinner.com/Secure/home.html"
       } else {
        // User is signed out
        // ...
        alert(`WARNING - YOU ARE NOT SIGNED IN.`)
      }
    });

  })
  .catch((error) => {
    // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // Edge cases
            if (!email || email.length==0) {
                document.getElementById('message').innerHTML = '⚠️ | Enter your email!'
                return;
            }
            if (!password || password.length==0) {
                document.getElementById('message').innerHTML = '⚠️ | Enter a password!'
                return;
            }
            if (errorCode == 'auth/wrong-password') {
                alert('Incorrect username, or password.')
                document.getElementById('password').value='';
            } else if (errorCode == 'auth/user-disabled') {
                document.getElementById('message').innerHTML = "⚠️ | Account Disabled"
            } else if (errorCode == 'auth/user-not-found') {
                document.getElementById('message').innerHTML = "⚠️ | This user doesn't exist"
            } else {
                document.getElementById('message').innerHTML = "⚠️ " + errorMessage;
            }
            console.log(error);
        });

}


function ResetPass(){
  var auth = firebase.auth();
      var emailAddress = document.getElementById('fb_email').value;
      auth.sendPasswordResetEmail(emailAddress).then(function() {
          document.getElementById("message").innerHTML = "✅  | Sent"
      }).catch(function(error) {
          document.getElementById("message").innerHTML = "⚠️ Error | Contact support if persists"
      });
};

function NewUser(){
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      alert(`User has been created successfully. \n:)`)
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      document.getElementById('message').innerHTML = "⚠️ " + errorMessage;
      alert(`Uh oh, an error has occurred. \nReport this to the support team so it can be fixed ASAP. /n:(`)
    });

    if (!email || email.length==0) {
        document.getElementById('message').innerHTML = '⚠️ | Enter your email!'
        return;
    }
    if (!password || password.length==0) {
        document.getElementById('message').innerHTML = '⚠️ | Enter a password!'
        return;
    }
}

function SignOut(){
// [START auth_sign_out]
 firebase.auth().signOut().then(() => {
   // Sign-out successful.
   window.location.href="https://d-skinner.com/Secure/login.html"
   document.getElementById('message').innerHTML = '✅  | Signed out successfully'
 }).catch((error) => {
   // An error happened.
     alert(`⚠️ | You are NOT signed out! \nSomething went wrong in the sign out process, please try again.`)
 });
 // [END auth_sign_out]
}
