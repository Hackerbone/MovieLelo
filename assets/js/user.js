  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB-qihmNr_tKv_Yh-PXGSxBq8aEnMC_KzM",
    authDomain: "movielelo-user.firebaseapp.com",
    projectId: "movielelo-user",
    storageBucket: "movielelo-user.appspot.com",
    messagingSenderId: "863027506897",
    appId: "1:863027506897:web:9c0dd10366988910e21ff0",
    measurementId: "G-69EF91VJJC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let profileview = document.getElementById('profile-view'),
  img = document.getElementById('img');

  let file = {}

  function chooseFile(e) {
file = e.target.files[0];
  }


  firebase.auth().onAuthStateChanged(user => {
      if(user)
      {
          firebase.storage().ref('users/' + user.uid).getDownloadURL().then(imgUrl => {
              img.src = imgUrl;
          })
      }
  })