import {
  IconCampaign,
  IconDarkMode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "components/icons";
import React from "react";
import { NavLink } from "react-router-dom";

const sidebarMenu = [
  {
    url: "/",
    title: "Dashboard",
    icon: <IconDashboard></IconDashboard>,
  },
  {
    url: "/campaign",
    title: "Campaign",
    icon: <IconCampaign></IconCampaign>,
  },
  {
    url: "/payment",
    title: "Payment",
    icon: <IconPayment></IconPayment>,
  },
  {
    url: "/with-draw",
    title: "Withdraw",
    icon: <IconWithdraw></IconWithdraw>,
  },
  {
    url: "/profile",
    title: "Profile",
    icon: <IconProfile></IconProfile>,
  },
  {
    url: "/abc",
    title: "Log out",
    icon: <IconLogout></IconLogout>,
    onClick: () => {},
  },
  {
    url: "/abc",
    title: "Light/Dark",
    icon: <IconDarkMode></IconDarkMode>,
    onClick: () => {},
  },
];

const DashboardSidebar = () => {
  const navlinkClass =
    "flex items-center md:w-12 md:h-12 md:justify-center md:rounded-[10px] last:mt-auto last:bg-white last:shadow-[10px_10px_20px_rgba(211,211,211,0.25)]";
  return (
    <div className="w-full md:w-[76px] rounded-[20px] shadow-[10px_10px_20px_rgba(218,213,213,0.15)] bg-white flex flex-col gap-[30px] px-[14px] py-10">
      {sidebarMenu.map((item) => (
        <NavLink
          to={item.url}
          key={item.title}
          className={({ isActive }) =>
            isActive
              ? `${navlinkClass} text-primary bg-primary bg-opacity-10`
              : `${navlinkClass} text-icon`
          }
        >
          <span className={``}>{item.icon}</span>
          <span className="md:hidden">{item.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
