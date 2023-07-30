import React from "react";
import { useSelector } from "react-redux";
import ScrollableFeed from "react-scrollable-feed";
import Avatar from "react-avatar";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../../../config/ChatLogics";

const ScrollableChat = ({ messages }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  return (
    <ScrollableFeed>
      {messages.length ? (
        messages?.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, loggedInUser?._id) ||
              isLastMessage(messages, i, loggedInUser?._id)) && (
              //   <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
              <Avatar
                size="40"
                round={true}
                cursor="pointer"
                name={m?.sender.username}
                src={m?.sender.photoURL}
              />
              //   </Tooltip>
            )}
            <span
              style={{
                backgroundColor: `${
                  m.sender._id === loggedInUser?._id ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: isSameSenderMargin(
                  messages,
                  m,
                  i,
                  loggedInUser?._id
                ),
                marginTop: isSameUser(messages, m, i, loggedInUser?._id)
                  ? 3
                  : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </div>
        ))
      ) : (
        <div className="py-32 font-bold text-2xl flex items-center justify-center">
          <h1>No chat history</h1>
        </div>
      )}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
