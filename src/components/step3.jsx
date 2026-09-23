const techOptions = {
    Frontend: ["React", "Vue", "TypeScript", "CSS Modules"],
    Backend: ["Node.js", "Python/Django", "PostgreSQL", "Redis"],
    "UI/UX Design": ["Figma", "Storybook", "Design Systems"]
};

function Step3({ formData, updateFormData, errors }) {
    const options = techOptions[formData.track] || [];

    const handleChange = (tech) => {
        const updated = formData.techStack.includes(tech)
            ? formData.techStack.filter((x) => x !== tech)
            : [...formData.techStack, tech];

        updateFormData({ techStack: updated });
    };

    return (
        <div className="step">
            <h2>Tech Stack</h2>

            {options.length ? (
                options.map((tech) => (
                    <label className="checkbox" key={tech}>
                        <input
                            type="checkbox"
                            checked={formData.techStack.includes(tech)}
                            onChange={() => handleChange(tech)}
                        />
                        {tech}
                    </label>
                ))
            ) : (
                <p>No technology options specified for Fullstack.</p>
            )}

            {errors.techStack && (
                <p className="error">{errors.techStack}</p>
            )}
        </div>
    );
}

export default Step3;