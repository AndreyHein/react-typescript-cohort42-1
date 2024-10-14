import { useContext } from "react";
import { MessageContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";

import { MessageWrapper } from "./styles";

function Message() {
  const message = useContext(MessageContext);

  return <MessageWrapper>{message}</MessageWrapper>;
}
export default Message;
