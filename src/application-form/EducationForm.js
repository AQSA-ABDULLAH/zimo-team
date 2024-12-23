import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


export default function Form3({ onContinue }) {
    // State to track screen width
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1300);

    // Update state on window resize
    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth > 1300);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const validationSchema = Yup.object({
        qualifications: Yup.string().required('Qualification is required'),
        completion: Yup.string().required('Year of completion is required'),
        university: Yup.string().required('University is required'),
        experience: Yup.string().required('Experience is required'),
        employement: Yup.string().required('Employment status is required'),
        resume: Yup.mixed().required('Resume is required')
    });

    const handleSubmit = (values) => {
        console.log(values);
        onContinue();
    };

    return (
        <section>
            <div className="flex items-center justify-center z-10 mt-[20px] lg:mt-[10px]">
                <Formik
                    initialValues={{
                        qualifications: '',
                        completion: '',
                        university: '',
                        experience: '',
                        employement: '',
                        resume: null
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ setFieldValue, touched, errors }) => (
                        <Form className="flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]"
                            style={
                                isLargeScreen
                                    ? {}
                                    : { paddingBottom: "180px" }
                            }
                        >
                            <div className="w-[90%] max-w-[580px] flex flex-col items-center space-y-2 text-[22px] lg:text-[18px] tracking-[2px]">
                                <h1>aqsaabdullah38403@gmail.com</h1>
                                <div className="py-1"></div>
                                <h1>AQSA Waheed</h1>
                                <div className="py-1"></div>
                            </div>

                            <div className="py-1"></div>

                            <Field name="qualifications">
                                {({ field, meta }) => (
                                    <select
                                        {...field}
                                        className={`placeholder:text-[18px] placeholder:md:text-[14px] text-[18px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] ${meta.touched && meta.error ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="">QUALIFICATION(S)</option>
                                        <option value="BA">BA</option>
                                        <option value="BBA">BBA</option>
                                        <option value="BSCS">BSCS</option>
                                        <option value="BSSE">BSSE</option>
                                        <option value="BSIT">BSIT</option>
                                        <option value="BFA">BFA</option>
                                        <option value="BS. HONS.">BS. HONS.</option>
                                        <option value="ACCA">ACCA</option>
                                        <option value="OTHER">OTHER</option>
                                    </select>
                                )}
                            </Field>

                            <Field name="completion">
                                {({ field, meta }) => (
                                    <select
                                        {...field}
                                        className={`placeholder:text-[18px] placeholder:md:text-[14px] text-[18px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] ${meta.touched && meta.error ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="">YEAR OF COMPLETION</option>
                                        {Array.from({ length: 19 }, (_, i) => (
                                            <option key={i} value={2028 - i}>
                                                {2028 - i}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </Field>

                            <Field name="university">
                                {({ field, meta }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        placeholder="UNIVERSITY"
                                        className={`placeholder:text-[18px] placeholder:md:text-[14px] text-[18px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] ${meta.touched && meta.error ? 'border-red-500' : ''
                                            }`}
                                    />
                                )}
                            </Field>

                            <Field name="experience">
                                {({ field, meta }) => (
                                    <select
                                        {...field}
                                        className={`placeholder:text-[18px] placeholder:md:text-[14px] text-[18px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] ${meta.touched && meta.error ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="">EXPERIENCE</option>
                                        <option value="NO EXPERIENCE">NO EXPERIENCE</option>
                                        <option value="LESS THAN 1 Year">LESS THAN 1 YEAR</option>
                                        {Array.from({ length: 7 }, (_, i) => (
                                            <option key={i} value={`${i + 1} YEARS`}>{`${i + 1} YEARS`}</option>
                                        ))}
                                        <option value="MORE THAN 7 YEARS">MORE THAN 7 YEARS</option>
                                    </select>
                                )}
                            </Field>

                            <Field name="employement">
                                {({ field, meta }) => (
                                    <select
                                        {...field}
                                        className={`placeholder:text-[18px] placeholder:md:text-[14px] text-[18px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] ${meta.touched && meta.error ? 'border-red-500' : ''
                                            }`}
                                    >
                                        <option value="">CURRENT EMPLOYMENT STATUS</option>
                                        <option value="STUDENT">STUDENT</option>
                                        <option value="UNEMPLOYED">UNEMPLOYED</option>
                                        <option value="PART TIME">EMPLOYED (PART TIME)</option>
                                        <option value="FULL TIME">EMPLOYED (FULL TIME)</option>
                                        <option value="INTERNSHIP">EMPLOYED (INTERNSHIP)</option>
                                        <option value="OTHER">OTHER</option>
                                    </select>
                                )}
                            </Field>

                            {/* File upload field */}
                            <div className="placeholder:text-[18px] placeholder:md:text-[14px] text-[18px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] ">
                                <label
                                    htmlFor="resume"
                                    className="text-black font-normal text-[18px] md:text-[14px] tracking-[2px] w-full text-center uppercase bg-transparent  focus:border-[#BE9F56] outline-none cursor-pointer"
                                >
                                    CV / Résumé
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    accept=".pdf,.docx"
                                    onChange={(event) => setFieldValue('resume', event.currentTarget.files[0])}
                                    className="hidden"
                                />
                            </div>

                            {/* Submit Button */}
                            <div
                                className="absolute"
                                style={
                                    isLargeScreen
                                        ? { display: 'flex', flexDirection: 'column', gap: '30px', bottom: '100px', right: '180px' }
                                        : { display: 'flex', gap: '80px', bottom: '-80px', marginBottom: '70px' }
                                }
                            >

                                <button
                                    type="button"
                                    className="h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] 
                                    rounded-xl items-center text-center flex-col uppercase"
                                    onClick={onContinue}
                                >
                                    <span className="text-[10px] opacity-70 my-2">optional</span>
                                    <p className="text-[14px]">ADD Supporting Statement</p>
                                </button>

                                <button
                                    type="submit"
                                    className="items-center justify-center h-[120px] w-[120px] 
                                    bg-black text-white tracking-widest text-[14px] rounded-lg text-center 
                                    disabled:animate-pulse"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}