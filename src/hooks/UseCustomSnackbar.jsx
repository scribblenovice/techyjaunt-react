import { useSnackbar } from "notistack";

const useCustomSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  return {
    handleSnackbar
  };
};

export default useCustomSnackbar;
