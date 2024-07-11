import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import HomeIcon from "@mui/icons-material/Home";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const routes = [
  {
    path: "/",
    content: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/orders",
    content: "Orders",
    icon: <LocalGroceryStoreIcon />,
  },
  {
    path: "/clients",
    content: "Clients",
    icon: <PeopleAltIcon />,
  },

  {
    path: "/service",
    content: "Service",
    icon: <LocalPostOfficeIcon />,
  },
];

export default routes;
