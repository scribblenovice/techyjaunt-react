import { PaystackButton } from "react-paystack";

const Paystack = ({email, paystackClass})=>{
    const config = {
      reference: new Date().getTime().toString(),
      email: { email },
      amount: 5000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: "pk_live_6819a39551ca62d6dc2fae282a80274de2bd1309",
    };

  const componentProps = {
    ...config,
    text: "PAY HERE",
    onSuccess: () => alert("SUCCESSFUL TRANSACTION"),
    onClose: () => {
      alert("TRANSACTION FAILED");
      closeModal;
    },
  };
  
    // "mx-auto bg-blue-500 text-white p-2 rounded"
    return (
      <>
        <PaystackButton
          className={paystackClass}
          {...componentProps}
        />
      </>
    );
}
export default Paystack