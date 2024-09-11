import cls from "./SignUp.module.scss";
import { classNames } from "../../lib/classNames/classNames";
const GenderCheckbox = ({
  onCheckboxChange,
  selectedGender,
}) => {
  return (
    <div className={classNames(cls.genderCheck, {}, [])}>
      <div className="male">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "checked" : ""
          }`}
        >
          <span className="">Male</span>
          <input
            type="checkbox"
            className=""
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="famale">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "checked" : ""
          }`}
        >
          <span className="">Female</span>
          <input
            type="checkbox"
            className=""
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
