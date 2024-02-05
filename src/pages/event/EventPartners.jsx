const EventPartners = () => {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 test pt-10`}
    >
      {eventPartnerImg.map((j) => {
        return (
          <Zoom>
            <div className="w-full h-full grid place-items-center">
              <img
                loading="lazy"
                className={`w-[70%]`}
                key={j.id}
                src={j.src}
                alt=""
              />
            </div>
          </Zoom>
        );
      })}
    </div>
  );
};
