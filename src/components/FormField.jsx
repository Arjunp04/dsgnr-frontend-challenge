const baseFieldStyles =
  "block w-full border-2 bg-white px-4 text-xl lg:text-large font-medium transition-colors placeholder:text-dark md:px-8 focus-visible:outline-offset-0";

const FormField = ({
  name,
  label,
  placeholder,
  type,
  autoComplete,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const errorId = `${name}-error`;
  const borderStyles = error
    ? "border-error"
    : "border-dark/60 hover:border-yellow";

  // input aur textarea dono mein yahi props lagte hain
  const fieldProps = {
    id: name,
    name,
    placeholder,
    autoComplete,
    value,
    onChange,
    onBlur,
    required: true,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          {...fieldProps}
          className={`${baseFieldStyles} ${borderStyles} h-56 resize-none pt-4`}
        />
      ) : (
        <input
          {...fieldProps}
          type={type}
          className={`${baseFieldStyles} ${borderStyles} py-4`}
        />
      )}

      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-sm text-error md:text-base"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
