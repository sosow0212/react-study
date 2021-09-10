import React from "react";
import { useState } from "react";

function UseState2() {
  const [Text, setText] = useState("");
  const [NickName, setNickName] = useState("");

  const onChange = (Text) => {
    setText(Text.target.value);
  };

  const onChangeNickName = (NickName) => {
    setNickName(NickName.target.value);
  }

  const onReset = () => {
    setText("");
    setNickName("");
  };

  return (
    <div>
      <h1>Use State - input, button</h1>
      <input onChange={onChange} value={Text} />
      <input onChange={onChangeNickName} value={NickName} />
      <button onClick={onReset}>초기화</button>
      <h2>값 : {Text} ({NickName})</h2>
    </div>
  );
}

export default UseState2;
