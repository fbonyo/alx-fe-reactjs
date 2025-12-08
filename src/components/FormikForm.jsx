import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().trim().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const onSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus(null);
    try {
      setSubmitting(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      await res.json();
      setStatus({ success: true });
      resetForm();
    } catch {
      setStatus({ success: false });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto" }}>
      <h2>Formik Registration Form</h2>
      <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={onSubmit}>
        {({ isSubmitting, status }) => (
          <Form noValidate>
            <div style={{ marginBottom: 12 }}>
              <label>Username</label>
              <Field name="username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label>Email</label>
              <Field name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div style={{ marginBottom: 12 }}>
              <label>Password</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {status && status.success === true && <div style={{ color: "green", marginTop: 8 }}>Registered (mock)!</div>}
            {status && status.success === false && <div style={{ color: "red", marginTop: 8 }}>Submission failed.</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
