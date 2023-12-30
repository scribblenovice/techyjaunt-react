export default function Validation(values, userType) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$_%^&*-]).{8,}$/;

  if (userType === "admin" && values.secretkey === "") {
    errors.secretKeyError = "enter secret key";
  } else{
    errors.secretKeyError = "";
  }

  if (values.name === "") {
    errors.nameError = "name is required";
  } else {
    errors.nameError = "";
  }
  if (values.email === "") {
    errors.emailError = "email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.emailError = "enter a valid email address";
  } else {
    errors.emailError = "";
  }

  if (values.password === "") {
    errors.passwordError = "password is required";
  } else if (!passwordRegex.test(values.password)) {
    errors.passwordError =
      "password must be 8 characters, at least one uppper case, lower case and one special characters";
  } else {
    errors.passwordError =
      "";
  }
  if (values.password != values.confirmpassword) {
    errors.confirmPasswordError = "password does not match";
  } else {
    errors.confirmPasswordError = "";
  }
    return errors;
}
