import React, { useState } from "react";
import Statement from "./Statment";
import Form1 from "./PersonalInformation";
import Form2 from "./AddressForm";
import Form3 from "./EducationForm";

export default function Application({ onBackToApplicationForm }) {
    const [currentForm, setCurrentForm] = useState(1);

    const handleContinue = () => {
        setCurrentForm((prevForm) => prevForm + 1);
    };

    const handleCancel = () => {
        setCurrentForm(3); // Go back to Form3
    };

    const handleBack = () => {
        setCurrentForm((prevForm) => {
            if (prevForm === 1) {
                onBackToApplicationForm(); // Trigger parent callback to show ApplicationForm
                return prevForm;
            }
            return prevForm - 1; // Navigate to the previous form
        });
    };

    return (
        <section>
            <header className="flex justify-between items-center w-[450px] px-8 pt-8">
                <div className="flex flex-col gap-2">
                    <h2 className="pr-8">APPLY</h2>
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 uppercase tracking-widest text-[20px] lg:text-[16px]"
                    >
                        <img src="/images/arrow.png" alt="keyback" className="w-[18px]" />
                        <span>BACK</span>
                    </button>
                </div>

                <section className="flex flex-col text-center items-center">
                    <h1 className="text-2xl">YOUR APPLICATION</h1>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            marginTop: "1.75rem",
                        }}
                    >
                        {[1, 2, 3].map((step) => (
                            <div
                                key={step}
                                style={{
                                    backgroundColor: currentForm === step ? "yellow" : "black",
                                    height: "2px",
                                    width: "60px",
                                }}
                            ></div>
                        ))}
                    </div>
                </section>

                <div>.</div>
            </header>

            {/* Conditional rendering based on current form state */}
            {currentForm === 1 && <Form1 onContinue={handleContinue} />}
            {currentForm === 2 && <Form2 onContinue={handleContinue} />}
            {currentForm === 3 && <Form3 onContinue={handleContinue} />}
            {currentForm === 4 && <Statement onCancel={handleCancel} />}

            <footer className="flex justify-between px-8 md:pt-20 pb-8 mt-4 pr-[55px] 2xl:pr-8">
                <div className="flex-1">
                    <img
                        src="/images/app-team.png"
                        alt="zimo-team-logo"
                        className="w-[318px] 3xl:w-[300px]"
                    />
                </div>

                <div>
                    <img
                        src="/images/internship.png"
                        alt="zimo-intern-logo"
                        className="w-[147px] 3xl:w-[90px] ml-auto"
                    />
                </div>
            </footer>
        </section>
    );
}


