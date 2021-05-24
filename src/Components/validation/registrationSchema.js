import * as yup from "yup";
export default yup.object().shape({
  username: yup
    .string()
    .required("Username Required")
    .min(4, "Username must be at least 4 characters")
    .max(10, "Username can not be more than 10 characters"),
  password: yup
    .string()
    .required("Password Required, ")
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password can not be more than 20 characters"),

  phoneNumber: yup
    .number()
    .min(1, `Price must be at least 1`)
    .max(999999.99, `Must be real Number`)
    .required(`Number is required`),
});
