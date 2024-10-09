import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { InputComponent, TitleComponent, ContactUsContainer } from "./styles";

function ContactUs() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(7, "The minimum name length is 3")
      .max(30, "The max name length is 50"),
    phone: Yup.string()
      .min(7, "The minimum phone length is 4")
      .max(30, "The max phone length is 20"),
    email: Yup.string()
      .email("Invalid Email format")
      .min(7, "The minimum email length is 6")
      .max(30, "The max email length is 60"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <ContactUsContainer onSubmit={formik.handleSubmit}>
      <TitleComponent>Contact us</TitleComponent>
      <InputComponent>
        <Input
          id="id-name"
          label="Full Name"
          placeholder="Your full name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <Input
          id="id-phone"
          label="Phone"
          placeholder="Your phone number"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.errors.phone}
        />
        <Input
          id="id-email"
          label="Email"
          placeholder="Your email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
      </InputComponent>
      <Button type="submit" name="SEND REQUEST" />
    </ContactUsContainer>
  );
}
export default ContactUs;
