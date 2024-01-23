const ThankYou = () => {
  const paid = sessionStorage.getItem("isPaid");
  window.addEventListener("load", () => {
    if (paid) {
      setTimeout(() => {
        window.location.href = import.meta.env.VITE_PAID_GROUP;
      }, 5000);
    }
  });
  return (
    <>
      <h1 className="text-black text-center">
        YOU HAVE SUCCESSFULLY PAID FOR THE COHORT!! YOU WILL BE REDIRECTED TO
        THE PAID WHATSAPP GROUP SHORTLY
      </h1>
    </>
  );
};
export default ThankYou;
