import { classNames } from "../../lib/classNames/classNames";

import { Conversations } from "./Conversations";

import { SearchInput } from "./SearchInput";

import cls from "./Sidebar.module.scss";

export const Sidebar = ({ className }) => {
  return (
    <div className={classNames(cls.Sidebar, {}, [className ?? ""])}>
      <div className={cls.rightColumn}>
        <Conversations />
        <SearchInput />
      </div>
    </div>
  );
};
