import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-center text-black my-10">
          WELCOME TECHYJAUNT ADMIN
        </h1>
        <div className="flex gap-10 flex-col md:flex-row">
          <NavLink
            to="/admin/change-link"
            className="p-2 rounded-md bg-blue-500 text-white w-fit"
          >
            CHANGE LAUNCHPAD LINK
          </NavLink>
          <NavLink
            to="/admin/view-schedule"
            className="p-2 rounded-md bg-blue-500 text-white w-fit"
          >
            VIEW MEETING SCHEDULE
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminNav;
