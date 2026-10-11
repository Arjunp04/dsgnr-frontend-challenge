const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`cursor-pointer bg-dark text-lg font-medium text-white transition-colors duration-500 hover:bg-yellow hover:text-dark ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
