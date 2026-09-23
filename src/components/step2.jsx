function Step2({ formData, updateFormData, errors }) {
    const handleTrackChange = (e) =>
        updateFormData({
            track: e.target.value,
            techStack: []
        });

    return (
        <div className="step">
            <h2>Preferences</h2>

            <label>Primary Track</label>

            <select
                value={formData.track}
                onChange={handleTrackChange}
            >
                <option value="">Select Track</option>
                <option>Frontend</option>
                <option>Backend</option>
                <option>Fullstack</option>
                <option>UI/UX Design</option>
            </select>

            {errors.track && (
                <p className="error">{errors.track}</p>
            )}

            <label>Experience Level</label>

            <select
                value={formData.experience}
                onChange={(e) =>
                    updateFormData({
                        experience: e.target.value
                    })
                }
            >
                <option value="">Select Experience</option>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
            </select>

            {errors.experience && (
                <p className="error">{errors.experience}</p>
            )}
        </div>
    );
}

export default Step2;