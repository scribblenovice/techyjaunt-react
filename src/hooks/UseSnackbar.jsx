import { useEffect, useState } from "react";
import { useSnackbar } from "react-simple-snackbar";
import useError from "./useError";

const useCustomSnackbar = () => {
  let error= showError()
  const options = {
    position: "top-center",
    style: error
      ? { backgroundColor: "red", color: "white" }
      : { backgroundColor: "green", color: "white" },
  };

  const [openSnackbar, closeSnackbar] = useSnackbar(options);

  const showError = (value) => {
    let isError = false;
    if (value === true) {
      isError = true;
    }
    if (value === false) {
      isError = false;
    }
    return isError;
  };

  // const showSuccess = () => {
  //   // resetError();
  //   error = false;
  // };
  // const showSnackbar = (message) => {
  //   openSnackbar(message);
  // };

  return {
    showSnackbar,
    showError,
    // showSuccess,
  };
};

export default useCustomSnackbar;
