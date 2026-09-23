function Step4({ formData, goToStep }) {
    return (
        <div className="step">
            <h2>Review & Submit</h2>

            <div className="review-section">
                <div className="review-header">
                    <h3>Personal Information</h3>

                    <button onClick={() => goToStep(1)}>
                        Edit
                    </button>
                </div>

                <p>
                    <strong>Name:</strong> {formData.name}
                </p>

                <p>
                    <strong>Email:</strong> {formData.email}
                </p>

                <p>
                    <strong>Portfolio/GitHub:</strong>{" "}
                    {formData.portfolio || "Not provided"}
                </p>
            </div>

            <div className="review-section">
                <div className="review-header">
                    <h3>Preferences</h3>

                    <button onClick={() => goToStep(2)}>
                        Edit
                    </button>
                </div>

                <p>
                    <strong>Track:</strong> {formData.track}
                </p>

                <p>
                    <strong>Experience:</strong>{" "}
                    {formData.experience}
                </p>
            </div>

            <div className="review-section">
                <div className="review-header">
                    <h3>Tech Stack</h3>

                    <button onClick={() => goToStep(3)}>
                        Edit
                    </button>
                </div>

                <p>
                    <strong>Technologies:</strong>{" "}
                    {formData.techStack.length
                        ? formData.techStack.join(", ")
                        : "None selected"}
                </p>
            </div>
        </div>
    );
}

export default Step4;