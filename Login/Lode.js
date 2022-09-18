document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})


// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         location.replace("index.html")
//     }
// })


// function login(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().signInWithEmailAndPassword(email, password)
//     .catch((error)=>{
//         document.getElementById("error").innerHTML = error.message
//     })
// }

// function signUp(){
//     const email = document.getElementById("email").value
//     const password = document.getElementById("password").value
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//         // Signed in 
//         var user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         document.getElementById("error").innerHTML = error.message
//         // ..
//     });
// }