
import useLogout from "../../hooks/useLogout";

import cls from "./Sidebar.module.scss";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div >
			
				<button  className={cls.LogoutButton} onClick={logout} >Logout</button>
			
		</div>
	);
};
export default LogoutButton;