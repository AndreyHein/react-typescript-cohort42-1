import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { InputComponent, TitleComponent, ContactUsContainer } from "./styles";

function ContactUs() {
  return (
    <ContactUsContainer>
      <TitleComponent>Contact us</TitleComponent>
      <InputComponent>
        <Input
          id="id-name"
          label="Full Name"
          placeholder="Your full name"
          name="name"
        />
        <Input
          id="id-phone"
          label="Phone"
          placeholder="Your phone number"
          name="phone"
        />
        <Input
          id="id-email"
          label="Email"
          placeholder="Your email"
          name="email"
        />
      </InputComponent>
      <Button type="submit" name="SEND REQUEST" />
    </ContactUsContainer>
  );
}
export default ContactUs;
