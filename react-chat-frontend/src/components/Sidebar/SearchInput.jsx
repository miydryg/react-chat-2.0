import { useState } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import { classNames } from "../../lib/classNames/classNames";
import useConversation from "../../zustand/useConversation";

import cls from "./Sidebar.module.scss";
import toast from "react-hot-toast";




export const SearchInput = ({ className }) => {
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const [search, setSearch] = useState("");

  const handleSubmitSearchInput = (event) => {
    event.preventDefault();
    if (!search) return;

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("no such user found");
  };
  return (
    <div className={classNames(cls.SearchInput, {}, [className])}>
      <div className={cls.chatInput}>
        <form onSubmit={handleSubmitSearchInput}>
          <input
         
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={cls.inputField }
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
};
