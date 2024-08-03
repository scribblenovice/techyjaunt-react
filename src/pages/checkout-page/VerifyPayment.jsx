import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const VerifyPayment = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const reference = query.get("reference");
  useEffect(() => {
    const verifyPayment = async () => {
      console.log(reference);
      const formData = JSON.parse(window.localStorage.getItem("formData"));
      if (!reference) {
        navigate("/error");
        return;
      }
      try {
        const response = await axios.post(
          "http://localhost:3001/verify-payment",
          { reference, ...formData }
        );
        if (response.data.success) {
          sessionStorage.setItem("isPaid", true);
          navigate("/checkout/thank-you");
        } else {
          navigate("/error");
        }
      } catch (error) {
        handleSnackbar(error.response.data.message, "error");
        navigate("/error");
      }
    };
    verifyPayment();
  }, [navigate]);

  return (
    <div className="bg-tech-blue flex justify-center items-center text-xl md:text-2xl xl:text-3xl text-white">
      Verifying payment...
    </div>
  );
};
export default VerifyPayment;
