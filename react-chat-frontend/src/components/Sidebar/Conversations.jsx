import useGetConversations from "../../hooks/useGetConversations";
import { classNames } from "../../lib/classNames/classNames";
import { Conversation } from "./Conversation";

import cls from "./Sidebar.module.scss";



export const Conversations = ({ className }) => {
  const { loading, conversations } = useGetConversations();
  //  console.log("conversations",conversations);

  //   console.log('Conversations',conversations);

  return (
    <div className={classNames(cls.Conversations, {}, [className ?? ""])}>
      {conversations.map((conversation) => (
        <Conversation key={conversation._id} conversation={conversation} />
      ))}
    </div>
  );
};
