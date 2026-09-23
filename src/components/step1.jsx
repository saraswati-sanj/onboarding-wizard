function Step1({ formData, updateFormData, errors }) {
    return (
        <div className="step">
            <h2>Personal Information</h2>

            <label>Name</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                    updateFormData({ name: e.target.value })
                }
            />

            {errors.name && (
                <p className="error">{errors.name}</p>
            )}

            <label>Email</label>
            <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                    updateFormData({ email: e.target.value })
                }
            />

            {errors.email && (
                <p className="error">{errors.email}</p>
            )}

            <label>Portfolio / GitHub URL</label>
            <input
                type="url"
                value={formData.portfolio}
                onChange={(e) =>
                    updateFormData({
                        portfolio: e.target.value
                    })
                }
                placeholder="https://github.com/username"
            />
        </div>
    );
}

export default Step1;