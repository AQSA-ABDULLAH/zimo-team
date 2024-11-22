import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ApplicationForm({ countries, roles, onApplyClick }) {
    const [showCountry, setShowCountry] = useState(true);

    // Validation schema for Formik using Yup
    const validationSchema = showCountry
        ? Yup.object({
              country: Yup.string().required("Please select your country."),
          })
        : Yup.object({
              role: Yup.string().required("Please select your role."),
          });

    return (
        <div className="flex flex-col min-h-screen bg-white px-4 py-8">
            <h1 className="px-4 text-[20px] ">APPLY</h1>
            
            {/* Show BACK button only when user is selecting a role */}
            {!showCountry && (
                <div 
                    className="px-2 py-1 flex cursor-pointer"
                    onClick={() => setShowCountry(true)}  // Set showCountry to true to go back to country selection
                >
                    <img src="/images/arrow.png" className="w-[36px]" />
                    <h1 className="text-[20px] ">BACK</h1>
                </div>
            )}

            <div className="flex items-center justify-center sm:py-16 z-10">
                <div className="border border-[#BE9F56] flex flex-col justify-around items-center relative p-10 
                    w-[800px] h-[430px] space-y-12 rounded-xl mx-auto">
                    <h1 className="title-font text-base my-4 font-medium uppercase tracking-widest text-[20px]">
                        start your application
                    </h1>
                    <img src="/images/zimo-career1.png" className="w-[290px] 3xl:w-[260px]" />
                    
                    <Formik
                        initialValues={{ country: "", role: "" }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            if (showCountry) {
                                setShowCountry(false);
                            } else {
                                onApplyClick(); // Trigger function to show Application component
                            }
                        }}
                    >
                        {({ handleSubmit, errors, touched }) => (
                            <Form className="w-full text-center space-y-6" onSubmit={handleSubmit}>
                                {showCountry ? (
                                    <div className="first">
                                        {/* Country Select Dropdown */}
                                        <Field 
                                            as="select"
                                            name="country"
                                            className={`w-[480px] uppercase p-3 rounded-xl tracking-widest text-center leading-tight focus:outline-none focus:border-[#BE9f56] border-2 text-[16px] md:text-[16px] cursor-pointer ${errors.country && touched.country ? 'border-red-500' : ''}`}
                                        >
                                            <option className="text-center" value="">SELECT YOUR COUNTRY</option>
                                            {countries.map((country) => (
                                                <option key={country} className="text-center" value={country}>
                                                    {country}
                                                </option>
                                            ))}
                                        </Field>

                                        {/* Start Button */}
                                        <button 
                                            type="submit"
                                            className="h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-[100px] right-[-60px] rounded-3xl flex items-center text-center justify-center"
                                        >
                                            START
                                        </button>
                                    </div>
                                ) : (
                                    <div className="second">
                                        
                                        {/* Roles Select Dropdown */}
                                        <Field 
                                            as="select"
                                            name="role"
                                            className={`w-[480px] uppercase p-3 rounded-xl tracking-widest text-center leading-tight focus:outline-none focus:border-[#BE9f56] border-2 text-[16px] md:text-[16px] cursor-pointer ${errors.role && touched.role ? 'border-red-500' : ''}`}
                                        >
                                            <option className="text-center" value="">SELECT YOUR ROLE</option>
                                            {roles.map((role) => (
                                                <option key={role} className="text-center" value={role}>
                                                    {role}
                                                </option>
                                            ))}
                                        </Field>
                                      
                                        {/* Apply Button */}
                                        <button 
                                            type="submit"
                                            className="h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-[100px] right-[-60px] rounded-3xl flex items-center text-center justify-center"
                                        >
                                            APPLY
                                        </button>
                                    </div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

