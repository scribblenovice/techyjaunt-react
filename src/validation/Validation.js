import moment from "moment";

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
    errors.lastName = "enter your last name";
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

export const validateCompany = (formData, update) => {
  let errors = {};
  let isValid = true;
  if (!formData.companyName.trim()) {
    errors.companyName = "enter your company name";
    isValid = false;
  }
  if (!formData.companyPosition.trim()) {
    errors.companyPosition = "enter the position occupied at the company";
    isValid = false;
  }
  if (!formData.companyWebsite.trim()) {
    errors.companyWebsite = "enter your company website";
    isValid = false;
  }
  update(errors);
  return isValid;
};

export const validateMeeting = (formData, update) => {
  let errors = {};
  let isValid = true;

  // Check if meetingTime is empty
  if (!formData.meetingTime.trim()) {
    errors.meetingTime = "Please select a valid meeting time";
    isValid = false;
  } else {
    const meetingDay = moment(formData.meetingTime)
      .format("dddd")
      .toLowerCase();
    const meetingMoment = moment(formData.meetingTime, "YYYY-MM-DDTHH:mm"); // Parse the meetingTime
    const startOfWorkDay = moment(meetingMoment).set({
      hour: 8,
      minute: 0,
      second: 0,
    });
    const endOfWorkDay = moment(meetingMoment).set({
      hour: 18,
      minute: 0,
      second: 0,
    });
    const today = moment().startOf("day"); // Get today's date at 00:00

    // Validate the time is within working hours (8:00 AM to 6:00 PM)
    if (
      meetingMoment.isBefore(startOfWorkDay) ||
      meetingMoment.isAfter(endOfWorkDay)
    ) {
      errors.meetingTime = "Meeting time must be between 8:00 AM and 6:00 PM";
      isValid = false;
    }
    if (meetingDay === "saturday" || meetingDay === "sunday") {
      errors.meetingTime = "Meeting time must be between Monday and Friday";
      isValid = false;
    }

    // Validate the date is not earlier than today
    if (meetingMoment.isBefore(today)) {
      errors.meetingTime = "Meeting date cannot be earlier than today's date";
      isValid = false;
    }
  }

  update(errors);
  return isValid;
};
