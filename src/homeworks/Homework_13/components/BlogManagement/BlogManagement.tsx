import { useState, createContext } from "react";
import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";
import { BlogWrapper, BlogTitle } from "./styles";

export const MessageContext = createContext<string | undefined>("");

function BlogManagement() {
  const [message, setMessage] = useState<undefined | string>(undefined);

  const getMessage = () => {
    {setMessage((prev) => prev)};
  };

  return (
    <MessageContext.Provider value={message}>
      <BlogWrapper>
        <BlogTitle>Blog Management</BlogTitle>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          cols={40}
          placeholder="Enter your blog post..."
        />
        <Button name="Create post" onClick={getMessage} />
        <Card />
      </BlogWrapper>
    </MessageContext.Provider>
  );
}
export default BlogManagement;
