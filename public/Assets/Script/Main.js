function CheckAuth() {


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    // ...
    console.log('User Signed In Successfully.')
    var user = firebase.auth().currentUser ;
var name, email, uid, emailVerified;
// Get the user's info
if (user != null) {
  name = user.displayName;
  email = user.email;
  emailVerified = user.emailVerified;
  uid = user.uid;

// Display the user's information to them

  firebase.auth().onAuthStateChanged(function() {
      const user = firebase.auth().currentUser
      const username = document.getElementById("username")
      const email = document.getElementById('email')
      const verified = document.getElementById('verified')

      verified.innerHTML = user.emailVerified
      username.innerHTML = user.displayName
      email.innerHTML = user.email
});


  } else {
    // User is signed out
    // ...
    alert(`Uh Oh! \nYou are not signed in. As part of our security check, you must sign in.`)
    window.location.href="https://d-skinner.com/Secure/login.html"
  }
});




}



fucntion AppCheck(){
  firebase.initializeApp({
  // Your firebase configuration object
});

const appCheck = firebase.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
appCheck.activate('6Lc0SxEbAAAAAP5z44qkfBY0NARAdiLpwajyAjPI');
}

function Analytics(){
  const analytics = firebase.analytics();

  firebase.analytics().logEvent('notification_received');

}
