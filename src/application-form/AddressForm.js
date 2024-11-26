import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function Form2({ onContinue }) {
  // State to track screen width
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

  // Update state on window resize
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1000);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <div className="flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]">
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
              className="relative flex w-[90%] max-w-[580px] space-y-2 text-[18px] lg:text-[16px] items-center 
              justify-between"
              style={
                isLargeScreen
                    ? { }
                    : { paddingBottom: "150px"}
            }
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col w-full space-y-2">
                <div className="text-center flex flex-col items-center space-y-2 text-[22px] lg:text-[18px] tracking-[2px]">
                  <h1>aqsaabdullah38403@gmail.com</h1>
                  <div className="py-1"></div>
                  <h1>AQSA Waheed</h1>
                  <div className="py-1"></div>
                </div>

                {/* Form Fields */}
                <Field name="cnic">
                  {({ field, meta }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="NATIONAL ID NUMBER (CNIC)"
                      className={`w-full text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${meta.touched && meta.error ? 'border-red-500' : ''
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
                      className={`w-full text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${meta.touched && meta.error ? 'border-red-500' : ''
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
                      className={`w-full text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${meta.touched && meta.error ? 'border-red-500' : ''
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
                      className={`w-full text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${meta.touched && meta.error ? 'border-red-500' : ''
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
                      className={`w-full text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${meta.touched && meta.error ? 'border-red-500' : ''
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
                      className={`w-full text-center bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none ${meta.touched && meta.error ? 'border-red-500' : ''
                        }`}
                    />
                  )}
                </Field>

                 {/* Submit Button */}
              <button
                type="submit"
                className="h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute 
                rounded-lg flex items-center justify-center uppercase"
                style={
                  isLargeScreen
                    ? { position: 'absolute', bottom: '60px', right: '-180px' }
                    : { position: 'absolute', bottom: '10px', left: '240px' }
                }
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

