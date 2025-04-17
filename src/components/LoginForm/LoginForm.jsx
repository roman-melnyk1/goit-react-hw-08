import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { login } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string().email('Невірний формат').required("Обов'язкове поле"),
  password: Yup.string().required("Обов'язкове поле"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(login(values))
          .unwrap()
          .finally(() => setSubmitting(false));
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            Пароль
            <Field type="password" name="password" className={css.input} />
            <ErrorMessage name="password" component="div" className={css.error} />
          </label>

          <button type="submit" disabled={isSubmitting} className={css.button}>
            Увійти
          </button>
        </Form>
      )}
    </Formik>
  );
}