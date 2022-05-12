export default function Dice(props) {
  const diceImg = "./images/dice-" + props.value + ".png";
  return (
    <div
      style={{ backgroundColor: props.isHeld ? "#59E391" : "#ffffff" }}
      className="dice-face"
      onClick={props.holdDice}
    >
      {/* <h2 className="dice-num">{props.value}</h2> */}
      <img className="dice-image" src={diceImg} alt="dice-img" />
    </div>
  );
}
