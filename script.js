function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert("Logged Out Successfully");
      localStorage.removeItem("uid");
      location.href = "/landing.html";
    })
    .catch((error) => {
      console.log(error);
    });
}
