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
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    id: "addMembers",
    icon: <PersonAddIcon />,
    path: "/add-members",
  },
  { id: "members", name: "Members", icon: <GroupIcon />, path: "/members" },
  {
    id: "workoutPlans",
    icon: <AddchartIcon />,
    path: "/workout-plans",
  },
  {
    id: "packages",
    icon: <PaymentsIcon />,
    path: "/packages",
  },
  { id: "trainers", name: "Trainers", icon: <TimerIcon />, path: "/trainers" },
  {
    id: "settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
  {
    id: "logOut",
    icon: <ExitToAppIcon />,
    path: "/",
    action: "log-out",
  },
];

export default tabs;
