import { classNames } from "../../lib/classNames/classNames";

import LogoutButton from "../Sidebar/LogoutButton";

import cls from "./Header.module.scss";
import { useAuthContext } from "../../context/AuthContext";



export const Header = ({ className }) => {
  const { authUser, setAuthUser } = useAuthContext();
  return (
    <div className={classNames(cls.Header, {}, [className ?? ""])}>
      <header>
        <p className={cls.title}>Chat bots 2.0</p>
            
      </header>
    
        <div className={cls.btn}>
        {authUser ? <LogoutButton/> : ""}
            {/* <LogoutButton/> */}
       
         
        </div>
        
          
      
    </div>
  );
};
