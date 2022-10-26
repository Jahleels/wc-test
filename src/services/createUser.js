import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function createUser(email, password) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   const user = userCredential.user;
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorMessage)
    // });
}
