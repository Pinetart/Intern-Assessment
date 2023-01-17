import "./Button.css";

const Button = ({ text, backgroundColor, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="button"
        style={{
          backgroundColor,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
