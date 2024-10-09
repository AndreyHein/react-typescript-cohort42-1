import { useFormik } from "formik";
import * as Yup from "yup";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import { InputComponent, TitleComponent, ContactUsContainer } from "./styles";
import { ContactValues, CONTACT_US_FORM_NAMES } from "./types";

function ContactUs() {
  const validationSchema = Yup.object().shape({
    [CONTACT_US_FORM_NAMES.FULL_NAME]: Yup.string()
      .required("Fullname field is required")
      .min(7, "The minimum name length is 3")
      .max(30, "The maximum name length is 50"),
    [CONTACT_US_FORM_NAMES.PHONE]: Yup.string()
      .required("Phone field is required")
      .min(7, "The minimum phone length is 4")
      .max(30, "The maximum phone length is 20"),
    [CONTACT_US_FORM_NAMES.EMAIL]: Yup.string()
      .email("Invalid Email format")
      .min(7, "The minimum email length is 6")
      .max(30, "The maximum email length is 60"),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACT_US_FORM_NAMES.FULL_NAME]: "",
      [CONTACT_US_FORM_NAMES.PHONE]: "",
      [CONTACT_US_FORM_NAMES.EMAIL]: "",
    } as ContactValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: ContactValues) => {
      console.log(values);
    },
  });
  return (
    <ContactUsContainer onSubmit={formik.handleSubmit}>
      <TitleComponent>Contact us</TitleComponent>
      <InputComponent>
        <Input
          id="id-name"
          label="Full Name*"
          placeholder="Your full name"
          name={CONTACT_US_FORM_NAMES.FULL_NAME}
          onChange={formik.handleChange}
          value={formik.values.fullName}
          error={formik.errors.fullName}
        />
        <Input
          id="id-phone"
          label="Phone*"
          placeholder="Your phone number"
          name={CONTACT_US_FORM_NAMES.PHONE}
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.errors.phone}
        />
        <Input
          id="id-email"
          label="Email"
          placeholder="Your email"
          name={CONTACT_US_FORM_NAMES.EMAIL}
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
