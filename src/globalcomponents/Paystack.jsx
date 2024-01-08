import { PaystackButton } from "react-paystack";

const Paystack = ()=>{
    const config = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: 10000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_37dcf5501ad10130819defd5bfafe0b988a3c87f",
  };

  const componentProps = {
    ...config,
    text: "PROCEED",
    onSuccess: () => alert("SUCCESSFUL TRANSACTION"),
    onClose: () => {
      alert("TRANSACTION FAILED");
      closeModal;
    },
  };
  
    
    return (
      <>
        <PaystackButton
          className="mx-auto bg-blue-500 text-white p-2 rounded"
          {...componentProps}
        />
      </>
    );
}