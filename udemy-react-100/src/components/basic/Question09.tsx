import Card from "../Card";


const Question09 = () => {
  return (
    <div>
      <Card title="カード１">
        <p>１番目のカード</p>
      </Card>

      <Card title="カード２">
        <ul>
          <li>リスト1</li>
          <li>リスト2</li>
        </ul>
      </Card>

      <Card title="カード３">
        <input type="text" />
      </Card>
    </div>
  );
};

export default Question09;