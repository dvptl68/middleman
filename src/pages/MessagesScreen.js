import React, { useState } from "react";
import { View, Text } from "react-native";

import ChatHeader from "./chatHeader";
import ChatInput from "./ChatInput";
import MessagesList from "./MessageList";

const MessagesScreen = ({ navigation, route }) => {
	const { username, bio, picture, isBlocked, isMuted } = route.params;
	const [reply, setReply] = useState("");
	const [isLeft, setIsLeft] = useState();

	const swipeToReply = (message, isLeft) => {
		setReply(message.length > 50 ? message.slice(0, 50) + '...' : message);
		setIsLeft(isLeft);
	};

	const closeReply = () => {
		setReply("");
	};

	return (
		<View style={{ flex: 1 }}>
			<ChatHeader
				onPress={() => {}}
				username={username}
				picture={picture}
				onlineStatus={'Online'}
			/>
			<MessagesList onSwipeToReply={swipeToReply} />
			<ChatInput reply={reply} isLeft={isLeft} closeReply={closeReply} username={username} />
		</View>
	);
};

export default MessagesScreen;