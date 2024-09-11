import { classNames } from "../../lib/classNames/classNames.js";
import cls from "./MessageContainer.module.scss";
import MessageHeader from "./MessageHeader.jsx";
import { Messages } from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { useAuthContext } from "../../context/AuthContext.jsx";
import useConversation from "../../zustand/useConversation.js";
import { useEffect } from "react";


export const MessageContainer = ({ className }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className={classNames(cls.MessageContainer, {}, [className ?? ""])}>
      <div className={cls.leftColumn}>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
        <>
          <MessageHeader />
          <Messages />
          <MessageInput />
        </>
         )} 
      </div>
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className={cls.NoChatSelected}>
      <div className={cls.message}>
        <p>Welcome 👋 {authUser?.fullName} </p>
        <p>Select a chat to start messaging</p>
      </div>
    </div>
  );
};
