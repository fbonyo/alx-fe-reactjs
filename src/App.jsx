import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  const [useFormik, setUseFormik] = useState(false);
  return (
    <div style={{ padding: 24 }}>
      <header style={{ marginBottom: 20 }}>
        <button onClick={() => setUseFormik(prev => !prev)}>
          Switch to {useFormik ? "Controlled Form" : "Formik Form"}
        </button>
      </header>

      {useFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}
