import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import { classNames } from "../../lib/classNames/classNames";
import { Message } from "./Message";


import cls from "./Messages.module.scss";



export const Messages = ({ className }) => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [messages]);

  return (
    <div className={classNames(cls.Messages, {}, [className ?? ""])}>
      <div className={cls.chatBox}>
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <div  key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          ))}
        {messages.length === 0 && <p>Send a message to start conversation</p>}
      </div>
      {/* <Message/> */}
    </div>
  );
};
