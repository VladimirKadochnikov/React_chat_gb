import { useState } from "react";
import { Input, Button } from "@mui/material";
import styles from "./login-form.module.css";

export function LoginForm({ title, button, onSubmit }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      return;
    }
    try {
      await onSubmit(form.email, form.password);
    } catch {
      console.log("handleSubmit: error");
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <div className={styles.form}>
        <Input
          fullWidth
          placeholder="e-mail"
          value={form.email}
          inputProps={{
            "data-name": "email",
          }}
          onChange={handleChangeForm}
        />
        <Input
          fullWidth
          placeholder="password"
          value={form.password}
          inputProps={{
            "data-name": "password",
          }}
          onChange={handleChangeForm}
        />
        <Button className={styles.form_button} onClick={handleSubmit}>
          {button}
        </Button>
      </div>
    </div>
  );
}
