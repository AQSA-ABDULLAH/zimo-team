import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function Form2({ onContinue }) {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    cnic: Yup.string().required(),
    addressOne: Yup.string().required(),
    addressTwo: Yup.string().required(),
    city: Yup.string().required(),
    stateRegion: Yup.string().required(),
    zipcode: Yup.string().required(),
  });

  return (
    <section>
      <div className='flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]'>
        <Formik
          initialValues={{
            cnic: '',
            addressOne: '',
            addressTwo: '',
            city: '',
            stateRegion: '',
            zipcode: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            onContinue(values); // Pass the form values to onContinue
          }}
        >
          {({ handleSubmit }) => (
            <Form
              autoComplete="off"
              className="flex flex-col flex-1 items-center space-y-2 relative text-[18px] lg:text-[16px]"
              onSubmit={handleSubmit}
            >
              <div className="w-[90%] max-w-[580px] text-center flex flex-col items-center space-y-2 text-[22px] lg:text-[18px] tracking-[2px]">
                <h1>aqsaabdullah38403@gmail.com</h1>
                <div className="py-1"></div>
                <h1>AQSA Waheed</h1>
                <div className="py-1"></div>
              </div>

              <Field name="cnic">
                {({ field, meta }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="NATIONAL ID NUMBER (CNIC)"
                    className={`w-[90%] max-w-[580px] text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${
                      meta.touched && meta.error ? 'border-red-500' : ''
                    }`}
                  />
                )}
              </Field>

              <Field name="addressOne">
                {({ field, meta }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="ADDRESS 1"
                    className={`w-[90%] max-w-[580px] text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${
                      meta.touched && meta.error ? 'border-red-500' : ''
                    }`}
                  />
                )}
              </Field>

              <Field name="addressTwo">
                {({ field, meta }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="ADDRESS 2 (APARTMENT, SUITE, ETC.)"
                    className={`w-[90%] max-w-[580px] text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${
                      meta.touched && meta.error ? 'border-red-500' : ''
                    }`}
                  />
                )}
              </Field>

              <Field name="city">
                {({ field, meta }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="CITY"
                    className={`w-[90%] max-w-[580px] text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${
                      meta.touched && meta.error ? 'border-red-500' : ''
                    }`}
                  />
                )}
              </Field>

              <Field name="stateRegion">
                {({ field, meta }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="STATE / REGION"
                    className={`w-[90%] max-w-[580px] text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${
                      meta.touched && meta.error ? 'border-red-500' : ''
                    }`}
                  />
                )}
              </Field>

              <Field name="zipcode">
                {({ field, meta }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="ZIP CODE / POST CODE"
                    className={`w-[90%] max-w-[580px] text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${
                      meta.touched && meta.error ? 'border-red-500' : ''
                    }`}
                  />
                )}
              </Field>

              <div className="flex justify-around w-full pt-10">
                <button
                  type="submit"
                  className="lg:flex items-center justify-center hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase"
                >
                  CONTINUE
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

