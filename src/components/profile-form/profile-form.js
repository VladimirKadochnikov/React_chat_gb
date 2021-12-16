import { Input, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../store/profile";
import styles from "./profile-form.module.css";

export function ProfileForm({ firstName, lastName, phone }) {
  const [form, setForm] = useState({ firstName, lastName, phone });

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const clearForm = () => {
    setForm({
      ...form,
      firstName: "",
      lastName: "",
      phone: "",
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>Edit profile</h1>

      <div className={styles.form}>
        <Input
          fullWidth
          placeholder="Name"
          value={form.firstName}
          inputProps={{
            "data-name": "firstName",
          }}
          onChange={handleChangeForm}
        />
        <Input
          fullWidth
          placeholder="Last name"
          value={form.lastName}
          inputProps={{
            "data-name": "lastName",
          }}
          onChange={handleChangeForm}
        />
        <Input
          fullWidth
          placeholder="phone number: +0(000)000-00-00"
          value={form.phone}
          inputProps={{
            "data-name": "phone",
          }}
          onChange={handleChangeForm}
        />

        <Button
          className={styles.button}
          onClick={() => {
            dispatch(updateProfile(form));
            clearForm();
          }}
        >
          save profile
        </Button>
      </div>
    </div>
  );
}
