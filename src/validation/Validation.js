export const validateContact = (formData, update) => {
  let errors = {};
  let isValid = true;

  if (!formData.email.trim()) {
    errors.email = "email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "enter a valid email address";
    isValid = false;
  }

  if (formData.phoneNumber.trim().length <= 4) {
    errors.phoneNumber = "phone number is required";
    isValid = false;
  }
  update(errors);
  return isValid;
};

export const validateInfo = (formData, update) => {
  let errors = {};
  let isValid = true;
  if (!formData.firstName.trim()) {
    errors.firstName = "enter your first name";
    isValid = false;
  }
  if (!formData.lastName.trim()) {
    errors.lastName = "enter your first name";
    isValid = false;
  }
  if (formData.gender === "") {
    errors.gender = "select a gender";
    isValid = false;
  }
  update(errors);
  return isValid;
};

export const validateCourses = (formData, update) => {
  let errors = {};
  let isValid = true;
  if (formData.selectedCourse === "") {
    errors.selectedCourse = "select an option";
    isValid = false;
  }

  if (formData.knowlegeOfTechyJaunt === "") {
    errors.knowlegeOfTechyJaunt = "select an option";
    isValid = false;
  }
  update(errors);
  return isValid;
};
