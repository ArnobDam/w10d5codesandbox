import "../PokeMoveCard.css";

const PokeMoveCard = ({ id, move, type, level }) => {
  return (
    <li className="poke-move-card">
      <h3>Move {id}</h3>
      <h4 style={{ padding: 10 }}>{move.toUpperCase()}</h4>
      <h5>Type: {type.toUpperCase()}</h5>
      <h5 style={{ padding: 10 }}>Learned at level {level}</h5>
    </li>
  );
};

export default PokeMoveCard;
