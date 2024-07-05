import React from "react";
import { NotificationMessage } from "./Notification.styles";

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};

export default Notification;
