import { useState } from "react";
///import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
// import { classNames } from "../../lib/classNames/classNames.js";


import cls from "./MessageInput.module.scss";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='' onSubmit={handleSubmit}>
			<div className={cls.chatInput}>
				<input
					type='text'
					className={cls.inputField}
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className={cls.sendButton}>
					Send
				</button>
			</div>
		</form>
	);
};
export default MessageInput;