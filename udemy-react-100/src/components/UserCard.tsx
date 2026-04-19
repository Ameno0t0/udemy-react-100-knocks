type UserInfoProps = {
  name: string;
  age: number;
  isActive: boolean;
}

const UserCard = ({name, age, isActive}: UserInfoProps) => {
  const status = isActive ? "アクティブ" : "非アクティブ";
  return (
    <div>
      <h3>ユーザー名：{name}</h3>
      <p>年齢：{age}</p>
      <p>ステータス：{status}</p><br />
      <br />
    </div>
  );
}

export default UserCard;
