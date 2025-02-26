import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BASE_URL } from "../../config";
import { toast } from "react-toastify";


// eslint-disable-next-line react/prop-types
const Tabs = ({ tab, setTab }) => {
  const { dispatch, role } = useContext(AuthContext);
  const tabsRef = useRef(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    try {
      let areYouSure = confirm('This will delete your account. Are you sure? ');
      if (!areYouSure) return

      const res = await fetch(`${BASE_URL}/users/profile/delete`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem('token')}`
        },
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success("Account Deleted Successfully");
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    }
    catch (e) {
      console.log(e)
    }
  }

  const toggleTabs = () => tabsRef.current.classList.toggle("hidden");

  return (
    <div>
      <span className="lg:hidden" onClick={toggleTabs}>
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div
        ref={tabsRef}
        className="hidden lg:flex items-center shadow-panelShadow  h-max p-[30px] bg-white  flex-col rounded-md"
      >
        <button
          onClick={() => setTab("overview")}
          className={` ${tab === "overview"
            ? "bg-indigo-100 text-[#0067FF]"
            : "bg-transparent text-headingColor"
            } w-full   btn rounded-md  mt-0`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={` ${tab === "appointments"
            ? "bg-indigo-100 text-[#0067FF]"
            : "bg-transparent text-headingColor"
            } w-full   btn rounded-md  mt-0`}
        >
          Appointments
        </button>

        {
          role == 'admin' &&
          <button
            onClick={() => setTab("approval")}
            className={` ${tab === "approval"
              ? "bg-indigo-100 text-[#0067FF]"
              : "bg-transparent text-headingColor"
              } w-full   btn rounded-md  mt-0`}
          >
            Approvals
          </button>
        }

        <button
          onClick={() => setTab("settings")}
          className={` ${tab === "settings"
            ? "bg-indigo-100 text-[#0067FF]"
            : "bg-transparent text-headingColor"
            } w-full   btn rounded-md  mt-0`}
        >
          Profile
        </button>

        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 rounded-md text-white text-[16px] leading-7"
          >
            Logout
          </button>
          <button
            onClick={handleDeleteAccount}
            className="w-full bg-red-600 mt-4 p-3 rounded-md text-white text-[16px] leading-7">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
