import UserCard from "../UserCard";

const Question07 = () => {
  const users = [
    {id:1, name: "一ノ瀬", age: 25, isActive: true},
    {id:2, name: "宮野", age: 40, isActive: false}
  ];
  return (
    <div>
      {users.map((user, id) => (
        <UserCard key={id} {...user} />
      ))}
    </div>
  );
};


export default Question07;