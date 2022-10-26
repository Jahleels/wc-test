import { getAuth, signOut } from "firebase/auth";

export default function signingOut() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
}
