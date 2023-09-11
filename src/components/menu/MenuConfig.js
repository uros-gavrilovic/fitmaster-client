import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import AddchartIcon from "@mui/icons-material/Addchart";
import PaymentsIcon from "@mui/icons-material/Payments";
import EventIcon from "@mui/icons-material/Event";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const tabs = [
  {
    id: "dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
    hasDividerAfter: true,
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
    id: "planner",
    name: "Planner",
    icon: <EventIcon />,
    path: "/planner",
  },
  {
    id: "exercises",
    name: "Exercises",
    icon: <SportsBasketballIcon />,
    path: "/exercises",
  },
  {
    id: "packages",
    icon: <PaymentsIcon />,
    path: "/packages",
  },
  { id: "trainers", name: "Trainers", icon: <TimerIcon />, path: "/trainers" },
  {
    hasDividerBefore: true,
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
