import { useFormik } from "formik";
import * as yup from 'yup';

import { FormInput, Section } from "../components";
import { Fetch } from "../utils/apiCalls";

const validationSchema = yup.object({
  name: yup.string().trim().required('You must enter a name'),
  email: yup.string().trim().email('Enter a valid email').required('You must enter an email'),
});

export const Contact = () => {
  const fetch = new Fetch('https://support@getsquared.io');
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await fetch.post('/', values);
    },
  });

  return (
    <Section>
      <h1 className="text-center text-white lg:text-h1 font-titles sm:text-h3 text-h4 mb-14">Request a demo and pricing</h1>
      <form
        className="flex flex-col xl:w-1/2 md:w-3/4 w-full justify-between mb-24 lg:p-10 p-6 rounded-[32px] bg-gradient-light1 max-[1350px]:justify-center mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <FormInput
          id="fullName"
          name="name"
          label="Full name"
          type="text"
          value={formik.values.name}
          placeholder="Type name"
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <FormInput
          id="workingEmail"
          name="email"
          label="Work email"
          type="text"
          value={formik.values.email}
          placeholder="name@example.com"
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <button type="submit" className="self-end w-32 px-4 py-2 text-base font-medium text-white bg-purple-400 border border-purple-400 rounded-full font-inter">
          Submit
        </button>
      </form>
    </Section>
  );
};