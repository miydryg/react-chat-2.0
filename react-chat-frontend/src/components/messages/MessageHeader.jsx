import { classNames } from "../../lib/classNames/classNames.js";
import useConversation from "../../zustand/useConversation.js";

import cls from "./MessageHeader.module.scss";



 const MessageHeader = ({ className }) => {
   const { selectedConversation, setSelectedConversation } = useConversation();

  return (
    <div className={classNames(cls.MessageHeader, {}, [className ?? ""])}>
      <div className={cls.botInfo}>
        <div className={cls.botAvatar}>
          <img src={selectedConversation.profilePic} height={173} width={173} />
          <div className={cls.botDetails}>
            <div className={cls.botTitle}>{selectedConversation.fullName}</div>

            <div className={cls.botDescription}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessageHeader;