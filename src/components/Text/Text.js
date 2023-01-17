import "./Text.css";

const Text = ({ recievedText }) => {
  return (
    <div className="height">
      <p>{recievedText}</p>
    </div>
  );
};

export default Text;
