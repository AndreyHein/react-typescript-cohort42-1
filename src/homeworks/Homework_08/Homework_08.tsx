import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { HomeworkWrapper } from "./styles";

function Homework_08() {
  return (
    <HomeworkWrapper>
      <Button
        name="Active Button"
        onClick={() => {
          console.log("I am Active Button");
        }}
      />

      <Button
        isDeleteVariant={true}
        name="Delete Button"
        onClick={() => {
          console.log("I am Delete Button");
        }}
      />

      <Button
        disabled={true}
        name="Deactive Button"
        onClick={() => {
          console.log("I am Deactive Button");
        }}
      />

      <Input
        id="input-1"
        label="Normal input"
        placeholder="Enter your first name"
        name="first_name"
      />

      <Input
        disabled={true}
        id="input-2"
        label="Disable input"
        placeholder="Enter your first name"
        name="first_name"
      />
      <Input
        disabled={true}
        error="Incorrect input"
        id="input-3"
        label="Disable input with error"
        placeholder="Enter your first name"
        name="first_name"
      />
      <Input
        error="Incorrect input"
        id="input-4"
        label="Input with error"
        placeholder="Enter your first name"
        name="first_name"
      />
    </HomeworkWrapper>
  );
}

export default Homework_08;
