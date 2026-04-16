import Greeting from "../Greeting";

const Question06  = () => {
  const nameList = ["山田", "佐藤", "鈴木"];
  return (
    <div>
      {nameList.map((name, index) => (
        <Greeting key={index} name={name} />
      ))};
    </div>
  );
};

export default Question06;