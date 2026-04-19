import type { ReactNode } from "react";
import "../App.css";

type Props = {
  title: string;
  children: ReactNode;
};

const Card = ({children, title}: Props) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;