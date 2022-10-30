import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from './login-form.module.css'

interface Values {
    username: string;
    password: string;
}

export default function LoginForm() {
    return (
      <div className={styles.login_box + ' p-3'}>
        <h1 className="display-6 mb-3">Login</h1>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}

          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}

        >
          <Form>
            <div className="mb-3">
              <Field className="form-control" id="username" name="username" placeholder="Username" aria-describedby="usernameHelp" />
            </div>
  
            <div className="mb-3">
              <Field className="form-control" id="password" name="password" placeholder="Password" type="password" />
            </div>
            <a href="/"
          className="px-4 py-2 text-blue-100 no-underline bg-navy rounded hover:bg-blue-600 hover:underline hover:text-blue-200">Log In
          </a>
          </Form>
        </Formik>
      </div>
    );
  };
