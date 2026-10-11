const Button = ({ children, href, type = "button", className = "", ...props }) => {
    const styles = `inline-flex cursor-pointer items-center justify-center bg-dark text-white transition-colors hover:bg-dark/80 ${className}`;
  
    if (href) {
      return (
        <a href={href} className={styles} {...props}>
          {children}
        </a>
      );
    }
  
    return (
      <button type={type} className={styles} {...props}>
        {children}
      </button>
    );
  };
  
  export default Button;