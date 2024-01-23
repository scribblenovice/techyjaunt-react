const MailBtn = ({mailLink}) => {
  return (
    <div className="fixed bottom-3 right-3">
      <a
        // href="mailto:Support@techyjaunt.com"
        href={mailLink}
        className="  grid place-items-center w-16 h-16 md:w-20 md:h-20 rounded-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-200 ease-linear hover:scale-105"
      >
        <i className="ri-mail-line text-3xl lg:text-4xl text-white"></i>
      </a>
    </div>
  );
};
export default MailBtn;
