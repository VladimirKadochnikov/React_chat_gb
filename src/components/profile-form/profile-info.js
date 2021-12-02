import { useSelector, useDispatch } from "react-redux";
import { ListItemIcon } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { togleVisibleProfile } from "../../store/profile";
import styles from "./profile-form.module.css";

export const ProfileInfo = () => {
  const { isVisibleProfile, firstName, lastName, ...profile } = useSelector(
    (state) => {
      return state.profile;
    }
  );

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <h1>Profile</h1>
      {isVisibleProfile && (
        <div className={styles.info}>
          <h2>
            Name: <span>{firstName}</span>
          </h2>
          <h2>
            Last name: <span>{lastName}</span>
          </h2>
          <h2>
            phone: <span>{profile.phone}</span>
          </h2>
        </div>
      )}
      <ListItemIcon>
        <AccountCircle
          fontSize="large"
          className={styles.button_icon}
          onClick={() => dispatch(togleVisibleProfile())}
        ></AccountCircle>
      </ListItemIcon>
    </div>
  );
};
