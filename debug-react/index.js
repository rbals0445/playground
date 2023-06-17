debugger;
function LikeButton() {
  const [text, setText] = React.useState("");

  const onClick = (e, test) => {
    console.log(e, test);
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <ul>
      <li onClick={onClick}>Item 1</li>
      <input type="text" onChange={onChange} value={text} />
      <label>
        Choose an ice cream flavor:
        <select class="ice-cream" name="ice-cream" onChange={onChange}>
          <option value="">Select One …</option>
          <option value="chocolate">Chocolate</option>
          <option value="sardine">Sardine</option>
          <option value="vanilla">Vanilla</option>
        </select>
      </label>
    </ul>
  );
}
// onClick={(e) => onClick(e, 1, 2, 3, 4, 5, 6, 7)} 는 아래로 변환된다.

// onClick(e) {
//   return _onClick(e, 1, 2, 3, 4, 5, 6, 7);
// }

function LikeButtonWithoutDelegation() {
  const onClick = (index) => () => {
    console.log(index);
  };

  return (
    <ul onClick={() => console.log("엣헴 버블링 성공")}>
      {Array(15000).map((_, index) => (
        <li onClick={onClick(index)} key={index}>
          {index}
        </li>
      ))}
    </ul>
  );
}
// debugger;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LikeButton />);

console.dir(LikeButton());
