import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import AddchartIcon from "@mui/icons-material/Addchart";
import PaymentsIcon from "@mui/icons-material/Payments";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const tabs = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    id: "add-members",
    name: "Add Members",
    icon: <PersonAddIcon />,
    path: "/add-members",
  },
  { id: "members", name: "Members", icon: <GroupIcon />, path: "/members" },
  {
    id: "workout-plans",
    name: "Workout Plans",
    icon: <AddchartIcon />,
    path: "/workout-plans",
  },
  {
    id: "packages",
    name: "Packages",
    icon: <PaymentsIcon />,
    path: "/packages",
  },
  { id: "trainers", name: "Trainers", icon: <TimerIcon />, path: "/trainers" },
  {
    id: "settings",
    name: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
  {
    id: "log-out",
    name: "Log Out",
    icon: <ExitToAppIcon />,
    path: "/",
    action: "log-out",
  },
];

export default tabs;
