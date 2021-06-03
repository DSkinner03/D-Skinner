function CheckAuth() {
  firebase.auth().onAuthStateChanged(function(user) {

    // Check if there is a user signed in and who
    if (user) {
    //User is signed in
    console.log('User Signed In Successfully.')
    var user = firebase.auth().currentUser ;
var name, email, uid, emailVerified;
// Get the user's info
if (user != null) {
  name = user.displayName;
  email = user.email;
  emailVerified = user.emailVerified;
  uid = user.uid;
}



  } else {
    //not signed in
    alert(`Uh Oh! \nYou are not signed in. As part of our security check, you must sign in.`)
    window.location.href="https://d-skinner.com/Secure/login.html"
  }

});


}
