import { LoginForm } from "../components";
import { firebaseApp } from "../api/firebase";

const onSubmit = (email, password) => {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};

export function SignUpPage() {
  return (
    <div>
      <LoginForm onSubmit={onSubmit} title="Sign Up" button="Register" />
    </div>
  );
}
