import TempConverter from "./TempConverter.jsx";
import TimerComp from "./TimerComp.jsx";

function MyComponent() {
  const arr = ["Fairfield", "Ottumwa", "Iowa City"];

  return (
    <div style={{ border: "5px solid black" }}>
      <p>Here</p>
      <TempConverter>
        <ol>
          {arr.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ol>
      </TempConverter>
      <br />
      <TimerComp></TimerComp>
    </div>
  );
}

export default MyComponent;
