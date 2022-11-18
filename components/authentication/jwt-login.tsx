// import { useFormik } from 'formik';
// import { useRouter } from 'next/router';
// import * as Yup from 'yup';
// import { useMounted } from '../../hooks/use-mounted';

// export const JWTLogin = () => {
//     const isMounted = useMounted();
//     const router = useRouter();
    
//     const formik = useFormik({
//         initialValues: {
//           email: 'demo@devias.io',
//           password: 'Password123!',
//           submit: null
//         },
//         validationSchema: Yup.object({
//           email: Yup
//             .string()
//             .email('Must be a valid email')
//             .max(255)
//             .required('Email is required'),
//           password: Yup
//             .string()
//             .max(255)
//             .required('Password is required')
//         }),
//         onSubmit: async (values, helpers) => {
//           try {
//             await login(values.email, values.password);
    
//             if (isMounted()) {
//               const returnUrl = router.query.returnUrl || '/dashboard';
//               router.push(returnUrl);
//             }
//           } catch (err) {
//             console.error(err);
    
//             if (isMounted()) {
//               helpers.setStatus({ success: false });
//               helpers.setErrors({ submit: err.message });
//               helpers.setSubmitting(false);
//             }
//           }
//         }
//       });
// }