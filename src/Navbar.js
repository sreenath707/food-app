import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { Dropdown, Button } from "antd";
import useUser from "./hooks/useUser";

function Navbar({ setIsModal, logout }) {
  const { user } = useUser();

  const items = [
    {
      key: "1",
      label: (
        <div className="w-[100px] cursor-pointer flex items-center gap-3">
          <SettingsIcon />
          <div>Settings</div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="w-[100px] cursor-pointer flex items-center gap-3">
          <PersonIcon />
          <div>Profile</div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          onClick={logout}
          className="w-[100px] cursor-pointer flex items-center gap-3"
        >
          <LogoutIcon />
          <div>Logout</div>
        </div>
      ),
    },
  ];
  return (
    <div className="px-[10px] bg-gray-100 h-[70px] flex items-center justify-between">
      <div>logo</div>
      {!user ? (
        <Button
          type="primary"
          className="bg-[#1677ff]"
          onClick={() => {
            setIsModal(true);
          }}
        >
          Login
        </Button>
      ) : (
        <div>
          <Dropdown
            trigger={["click"]}
            menu={{ items }}
            placement="bottomRight"
          >
            <AccountCircleIcon
              fontSize="large"
              className="text-gray-600 cursor-pointer"
            />
          </Dropdown>
        </div>
      )}
    </div>
  );
}

export default Navbar;
