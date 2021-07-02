// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyDJafeAkqYgCDn4seciw5Z9Oj5b3f_ACrU",
  authDomain: "d-skinner.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "d-skinner.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
