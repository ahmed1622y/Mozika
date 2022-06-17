import { RiMenu5Line } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className="d-flex flex-column align-items-center bg-dark text-white">
      <a>
        <RiMenu5Line size={100} />
      </a>
      <a>Home</a>
      <a>Search</a>
      <a>Your library</a>
    </div>
  );
};
export default Sidebar;
