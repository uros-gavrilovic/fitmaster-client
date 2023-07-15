import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import AddchartIcon from "@mui/icons-material/Addchart";
import PaymentsIcon from "@mui/icons-material/Payments";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const tabs = [
  { name: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { name: "Add Members", icon: <PersonAddIcon />, path: "/add-members" },
  { name: "Members", icon: <GroupIcon />, path: "/members" },
  { name: "Workout Plans", icon: <AddchartIcon />, path: "/workout-plans" },
  { name: "Packages", icon: <PaymentsIcon />, path: "/packages" },
  { name: "Trainers", icon: <TimerIcon />, path: "/trainers" },
  { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { name: "Log Out", icon: <ExitToAppIcon />, path: "/" },
];

export default tabs;
