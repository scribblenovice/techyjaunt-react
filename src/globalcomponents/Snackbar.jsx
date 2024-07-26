import { useState } from "react";
import { useSnackbar } from "react-simple-snackbar";

const useCustomSnackbar = () => {
  const [error, setError] = useState(false);
  const options = {
    position: "top-center",
    style: {
      backgroundColor: !error ? "#f05252" : "#0e9f6e",
      zIndex: 1300,
      position: "relative",
    },
  };
  const [openSnackbar, closeSnackbar] = useSnackbar(options);

  const showSnackbar = (message) => {
    openSnackbar(message);
  };
  const isSuccess = (value) => {
    setError(value);
  };

  return {
    showSnackbar,
    closeSnackbar,
    isSuccess
  };
};

export default useCustomSnackbar;
