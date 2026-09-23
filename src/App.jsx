import { useEffect, useState } from "react";

import Step1 from "./components/step1.jsx";
import Step2 from "./components/step2.jsx";
import Step3 from "./components/step3.jsx";
import Step4 from "./components/step4.jsx";
const initialData = {
    name: "",
    email: "",
    portfolio: "",
    track: "",
    experience: "",
    techStack: []
};

function App() {
    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem("onboardingDraft");

        return saved ? JSON.parse(saved) : initialData;
    });

    const [currentStep, setCurrentStep] = useState(1);

    const [errors, setErrors] = useState({});

    const [draftSaved, setDraftSaved] = useState(false);

    // Automatically save form data to localStorage
    useEffect(() => {
        setDraftSaved(false);

        const timer = setTimeout(() => {
            localStorage.setItem(
                "onboardingDraft",
                JSON.stringify(formData)
            );

            setDraftSaved(true);
        }, 500);

        return () => clearTimeout(timer);
    }, [formData]);

    // Update form data
    const updateFormData = (updates) => {
        setFormData((prev) => ({
            ...prev,
            ...updates
        }));
    };

    // Validate current step
    const validateStep = () => {
        const e = {};

        // Step 1 validation
        if (currentStep === 1) {
            if (!formData.name.trim()) {
                e.name = "Name is required";
            }

            if (!formData.email.trim()) {
                e.email = "Email is required";
            } else if (
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
            ) {
                e.email = "Enter a valid email";
            }
        }

        // Step 2 validation
        if (currentStep === 2) {
            if (!formData.track) {
                e.track = "Please select a track";
            }

            if (!formData.experience) {
                e.experience =
                    "Please select experience level";
            }
        }

        // Step 3 validation
        if (
            currentStep === 3 &&
            formData.track !== "Fullstack" &&
            formData.techStack.length === 0
        ) {
            e.techStack = "Select at least one technology";
        }

        setErrors(e);

        return Object.keys(e).length === 0;
    };

    // Go to next step
    const nextStep = () => {
        if (validateStep()) {
            setCurrentStep((s) => Math.min(s + 1, 4));
        }
    };

    // Go to previous step
    const previousStep = () => {
        setErrors({});

        setCurrentStep((s) => Math.max(s - 1, 1));
    };

    // Jump directly to a step
    const goToStep = (step) => {
        setErrors({});
        setCurrentStep(step);
    };

    return (
        <div className="container">
            <h1>Onboarding Wizard</h1>

            {/* Step indicators */}
            <div className="steps">
                {[1, 2, 3, 4].map((s) => (
                    <span
                        key={s}
                        className={
                            currentStep >= s ? "active" : ""
                        }
                    >
                        {s}
                    </span>
                ))}
            </div>

            {/* Step 1 */}
            {currentStep === 1 && (
                <Step1
                    formData={formData}
                    updateFormData={updateFormData}
                    errors={errors}
                />
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
                <Step2
                    formData={formData}
                    updateFormData={updateFormData}
                    errors={errors}
                />
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
                <Step3
                    formData={formData}
                    updateFormData={updateFormData}
                    errors={errors}
                />
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
                <Step4
                    formData={formData}
                    goToStep={goToStep}
                />
            )}

            {/* Navigation */}
            <div className="navigation">
                {currentStep > 1 && (
                    <button onClick={previousStep}>
                        Back
                    </button>
                )}

                {currentStep < 4 && (
                    <button onClick={nextStep}>
                        Next
                    </button>
                )}

                {currentStep === 4 && (
                    <button
                        onClick={() =>
                            alert(
                                "Onboarding submitted successfully!"
                            )
                        }
                    >
                        Submit
                    </button>
                )}
            </div>

            {/* Draft saved message */}
            {draftSaved && (
                <p className="saved">
                    Draft Saved
                </p>
            )}
        </div>
    );
}

export default App;