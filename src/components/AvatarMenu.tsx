import { logout } from "../../auth.lib.client";

type AvatarMenuProps = {
  className?: string;
};

const AvatarMenu = ({ className = "" }: AvatarMenuProps) => {
  const handleLogOut = () => {
    logout();
  };

  return (
    <div className={`dropdown dropdown-end ${className}`}>
      <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User Profile Pic"
            src="https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </button>
      <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <button className="justify-between">
            Profile
            <span className="badge">New</span>
          </button>
        </li>
        <li>
          <button>Settings</button>
        </li>
        <li>
          <button onClick={handleLogOut}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default AvatarMenu;
