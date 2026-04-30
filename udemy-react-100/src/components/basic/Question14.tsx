import { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  const [submitted, setSubmitted] = useState(false);

  const handleClear = () => {
    setName("");
    setEmail("");
    setAge(0);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  }
  const style = {
    paddingBottom: "10px",
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={style}>
          <label style={{marginRight: "20px"}}>名前</label>
          <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
        </div>
        <div style={style}>
          <label style={{marginRight: "5px"}}>メール</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
        </div>
        <div style={style}>
          <label style={{marginRight: "20px"}}>年齢</label>
          <input type="text" value={age} onChange={(e) => setAge(Number(e.currentTarget.value))} />
        </div>
        <button type="submit" style={{marginRight: "20px"}}>登録</button>
        <button type="button" onClick={handleClear}>クリア</button>
      </form>
        {submitted && (
          <div style={{marginTop: "30px"}}>
            <h2>登録内容</h2>
            <p>名前：{name}</p>
            <p>メール：{email}</p>
            <p>年齢：{age}</p>        
          </div>
        )}

    </div>
  );
};

export default RegistrationForm;