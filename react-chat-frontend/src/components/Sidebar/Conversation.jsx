import { useSocketContext } from "../../context/SocketContext.jsx";
import { classNames } from "../../lib/classNames/classNames.js";
import useConversation from "../../zustand/useConversation.js";

import cls from "./Sidebar.module.scss";



export const Conversation = ({
  className,
  conversation,
}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = (selectedConversation )?._id === conversation._id;
  const {onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  return (

    
    <div
      className={classNames(
        cls.Conversation,
        { [cls.selectedConversation]: isSelected },
        [className ?? ""]
      )}
      onClick={() => setSelectedConversation(conversation)}
    >
      <div className={cls.botInfo}>
        <div className={cls.botAvatar}>
          <div className={cls.botOnline}>
            <img src={conversation.profilePic} height={50} width={50} />
            <span className={` ${isOnline ? cls.onlineStatus : ''}`}></span> {/* Значок онлайна */}
          </div>
         
          <div className={cls.botDetails}>
            <div className={cls.botTitle}>{conversation.username}</div>

            <div className={cls.botDescription}>
              Fusce dapibus, tellus ac cursus commodo, tort...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
