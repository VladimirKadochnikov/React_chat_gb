import { useSelector } from "react-redux";
import { ProfileForm, ProfileInfo } from "../components";

export const ProfilePage = () => {
  const { firstName, lastName, ...profile } = useSelector((state) => {
    return state.profile;
  });

  return (
    <div>
      <ProfileInfo />
      <ProfileForm firstName={firstName} lastName={lastName} {...profile} />
    </div>
  );
};
