import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default async function authUser(email, password) {
  const auth = getAuth();
  return await signInWithEmailAndPassword(auth, email, password)
    // .then((userCredential) => {
    //   const user = userCredential.user;
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    // });
}
