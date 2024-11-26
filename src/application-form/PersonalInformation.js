import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export default function Form1({ onContinue }) {
    // State to track screen width
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

    // Update state on window resize
    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 1000);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Define validation schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required(),
        confirmEmail: Yup.string()
            .oneOf([Yup.ref('email'), null], 'Emails must match')
            .required(),
        firstName: Yup.string().required(),
        lastName: Yup.string().required(),
        dob: Yup.date()
            .max(new Date(), 'Date of birth cannot be in the future')
            .required(),
        phone: Yup.string()
            .matches(
                /^[0-9]{10}$/,
                'Phone number must be 10 digits and contain only numbers'
            )
            .required(),
        zarCode: Yup.string().notRequired(), // Optional field, no validation needed
    });

    // Handle form submission
    const handleSubmit = (values) => {
        console.log(values); // Or call onContinue() to proceed to next form
        onContinue();
    };

    return (
        <section>
            <div className="flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]">
                <Formik
                    initialValues={{
                        email: '',
                        confirmEmail: '',
                        firstName: '',
                        lastName: '',
                        dob: '',
                        phone: '',
                        zarCode: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form
                            autoComplete="off"
                            className="relative flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]"
                            style={
                                isLargeScreen
                                    ? { }
                                    : { paddingBottom: "150px"}
                            }
                        >
                            <Field name="email">
                                {({ field, meta }) => (
                                    <input
                                        {...field}
                                        type="email"
                                        placeholder="EMAIL ADDRESS"
                                        className={`tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal 
                                            placeholder:text-[18px] max-w-[580px] text-center bg-transparent border placeholder:text-center 
                                            border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none 
                                            ${meta.touched && meta.error
                                                ? 'border-red-500'
                                                : ''
                                            }`}
                                    />
                                )}
                            </Field>

                            <Field name="confirmEmail">
                                {({ field, meta }) => (
                                    <input
                                        {...field}
                                        type="email"
                                        placeholder="CONFIRM EMAIL ADDRESS"
                                        className={`tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal 
                                            placeholder:text-[18px] max-w-[580px] text-center bg-transparent border placeholder:text-center 
                                            border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none 
                                            ${meta.touched && meta.error
                                                ? 'border-red-500'
                                                : ''
                                            }`}
                                    />
                                )}
                            </Field>


                            <Field name="firstName">
                                {({ field, meta }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="FIRST NAME"
                                        className={`tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal 
                                            placeholder:text-[18px] max-w-[580px] text-center bg-transparent border placeholder:text-center 
                                            border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none 
                                            ${meta.touched && meta.error
                                                ? 'border-red-500'
                                                : ''
                                            }`}
                                    />
                                )}
                            </Field>

                            <Field name="lastName">
                                {({ field, meta }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="LAST NAME (INCLUDING MIDDLE NAME)"
                                        className={`tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal 
                                            placeholder:text-[18px] max-w-[580px] text-center bg-transparent border placeholder:text-center 
                                            border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none 
                                            ${meta.touched && meta.error
                                                ? 'border-red-500'
                                                : ''
                                            }`}
                                    />
                                )}
                            </Field>

                            <Field name="dob">
                                {({ field, meta }) => (
                                    <input
                                        {...field}
                                        type="date"
                                        max="2050-12-25"
                                        placeholder="DD/MM/YYYY"
                                        className={`tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal 
                                            placeholder:text-[28px] max-w-[580px] text-center bg-transparent border placeholder:text-center 
                                            border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none 
                                            ${meta.touched && meta.error
                                                ? 'border-red-500'
                                                : ''
                                            }`}
                                    />
                                )}
                            </Field>



                            <p className="text-black font-normal text-[18px] w-[90%] max-w-[580px] outline-none bg-transparent 
                                    border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] 
                                    uppercase">
                                Brazil
                            </p>

                            <div className='flex w-[90%] max-w-[580px] text-center items-center  gap-2 h-14 relative focus:bg-transparent'>
                                <div className='font-normal text-[18px] w-[200px] outline-none bg-transparent 
                                 border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56'>
                                    <div className='w-full h-18'>
                                        <span className="">+32</span>
                                    </div>
                                </div>
                                <Field name="phone">
                                    {({ field, meta }) => (
                                        <input
                                            {...field}
                                            type="tel"
                                            placeholder="PHONE NUMBER"
                                            className={`text-black font-normal text-[18px] w-full outline-none bg-transparent 
                                            border placeholder:text-center text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] 
                                            uppercase ${meta.touched && meta.error
                                                    ? 'border-red-500'
                                                    : ''
                                                }`}
                                        />
                                    )}
                                </Field>
                            </div>

                            <Field
                                type="text"
                                name="zarCode"
                                placeholder="ZAR CODE (OPTIONAL)"
                                className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal 
                                    placeholder:text-[18px] max-w-[580px] text-center bg-transparent border placeholder:text-center 
                                    border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                            />

                            <button
                                type="submit"
                                className="h-[120px] w-[120px] bg-black text-white tracking-widest 
                                        text-[14px] absolute rounded-lg flex items-center 
                                        justify-center uppercase"
                                        style={
                                            isLargeScreen
                                                ? { position: 'absolute', bottom: '70px', right: '140px' }
                                                : { position: 'absolute', bottom: '0px'}
                                        }
                            >
                                CONTINUE
                            </button>

                        </Form>
                    )}
                </Formik>
            </div>

        </section>
    );
}