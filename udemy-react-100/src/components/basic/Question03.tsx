const Introduction = () => {
  const name = "田中太郎";
  const age = 25;
  const year = new Date().getFullYear();
  return(
    <>
      <div>私は{name}です。{age}歳です。今年は{year}年です。</div>
    </>
  );
};

export default Introduction;