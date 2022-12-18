import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required("Username is required")
        .min(3, "Username must be 3 characters long"),
    email: yup
        .string()
        .email("must be a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .required("password is required")
        .min(6, "password must be at least 6 characters long"),
    tos: yup
        .boolean()
        .oneOf([true], "must accept terms of service")
})

export default formSchema;