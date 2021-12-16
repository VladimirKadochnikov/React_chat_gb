import { LoginForm } from "../components";
import { firebaseApp } from "../api/firebase";

const onSubmit = (email, password) => {
  return firebaseApp.auth().signInWithEmailAndPassword(email, password);
};

export function LoginPage() {
  return (
    <div>
      <LoginForm onSubmit={onSubmit} title="Login" button="Log in" />
    </div>
  );
}
