import Text from "../components/Text/Text";
import Button from "../components/Button/Button";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const homeText = `This is the Home Page. Page is Empty. Li Europan lingues es membres del
      sam familie. Lor separat existentie es un myth. Por scientie, musica,
      sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in
      li grammatica, li pro`;

  const [text, setText] = useState(homeText);

  const onClickHello = () => {
    setText(`Hello, how are you?`);
  };
  const onClickName = (name) => {
    setText(`My name is ${name}`);
  };
  const onClickReset = () => {
    setText(homeText);
  };

  return (
    <div>
      <Text recievedText={text} />
      <div className="buttons">
        <div className="button-div">
          <Button
            text={`Hello`}
            backgroundColor={`#4E3822`}
            onClick={onClickHello}
          />
        </div>
        <div className="button-div">
          <Button
            text={`Name`}
            backgroundColor={`#2F1B25`}
            onClick={(e) => {
              onClickName("Malissa");
            }}
          />
        </div>
        <div className="button-div">
          <Button
            text={`Reset`}
            backgroundColor={`#b82525`}
            onClick={onClickReset}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
