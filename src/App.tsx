import { useState } from "react";

function App() {
  // useStates => Hooks
  // useState는 가자 기본적인 Hook이며, 함수 컨포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  // => 이 함수가 호출되면 배열을 반환한다 => 첫 번째 요소는 상태 값, 두 번째 요소는 상태를 설정하는 함수
  // => useState 함수의 파라미터에는 상태의 기본값을 넣어 줍니다.
  // const [alphabet, setAlphabet] = useState<String>("");

  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value); {/* event.target.value이것은 거의 암기의 영역*/}
  };

  return (
   
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>
      </p>
        <button onClick={increment}>1 증가</button>
        <button onClick={decrement}>1 감소</button>

        <div>
          <p></p>
          <input type="text" value={name} onChange={onChangeName}/> {/*거의 암기의 영역*/}
          <input type="text" value={nickname} onChange={onChangeNickname}/>
        </div>

        <div>
          <b>이름: {name}</b>
          <b>slrspdla: {nickname}</b>
        </div>
    </div>
    
  );
};

export default App;