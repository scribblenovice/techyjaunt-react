import Snackbar from "@mui/material/Snackbar";
const Snackbar = ({ open, handleClose, message }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={handleClose}
      message={message}
      key={vertical + horizontal}
      autoHideDuration={4000}
    />
  );
};
export default Snackbar;
