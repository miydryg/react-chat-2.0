import { useAuthContext } from "../../context/AuthContext";
import { classNames } from "../../lib/classNames/classNames";
import { extractTime } from "../../lib/extractTime/extractTime";
import useConversation from "../../zustand/useConversation";
import cls from "./Message.module.scss";
export const Message = ({ className, message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;

  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? cls.chatMessageLeft : cls.chatMessageRigth;
  const chatContentClassName = fromMe
    ? cls.chatContentLeft
    : cls.chatContentRight;
  const chatUserNameClassName = fromMe
    ? cls.chatUsernameLeft
    : cls.chatUsernameRight;

  const username = fromMe ? authUser.username : selectedConversation?.username;

  return (
    <div className={classNames(` ${chatClassName}`, {}, [className])}>
      <div className={cls.chatUser}>
        <div className={chatUserNameClassName}>
          {username}
          <div>{formattedTime}</div>
        </div>
        <div className={chatContentClassName}>{message.message}</div>
      </div>
    </div>
  );
};
