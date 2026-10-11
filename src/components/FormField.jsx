const baseFieldStyles =
  "block w-full border-2 border-dark/60 bg-white px-4 text-xl lg:text-large font-medium transition-colors placeholder:text-dark hover:border-yellow md:px-8";

const FormField = ({ name, label, placeholder, type }) => {
  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className={`${baseFieldStyles} resize-none pt-4 h-56`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`${baseFieldStyles} py-4`}
        />
      )}
    </div>
  );
};

export default FormField;
