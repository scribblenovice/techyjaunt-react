const LaunchPadThankyou = () => {
  function redirect() {
    setTimeout(() => {
      sessionStorage.removeItem("isRegistered");
      window.location.href = "https://chat.whatsapp.com/EYUmLA5lrDB0KrWAFuH5Hm";
    }, 5000);
  }
  // redirect();

  return (
    <>
      <div className="w-screen h-screen grid place-items-center bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="grid place-items-center w-[90%] sm:w-[80%] gap-y-5">
          <i
            className={`ri-checkbox-circle-line text-green-300 text-9xl lg:text-[200px]`}
          ></i>
          <p className="text-center text-xl sm:text-2xl md:text-4xl text-white font-bold">
            YOU HAVE SUCCESSFULLY REGISTERED FOR TECHYJAUNT COHORT 3! YOU WILL BE
            REDIRECTED TO OUR WHATSAPP COMMUNITY SHORTLY
          </p>
        </div>
      </div>
    </>
  );
};
export default LaunchPadThankyou;
