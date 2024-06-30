import { useReducer } from "react";

// state  사용하고 있는 state
// action dispatch 함수로부터 받을 액션 또는 다음 state 값
function reducer(state, action) {
  // console.log(state, action);
  // if (action.type === "INCREASE") return state + action.data;
  // else if (action.type === "DECREASE") return state - action.data;

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  // state        현재 state의 값
  // dispatch     state를 업데이트하고 리렌더링을 시키는 함수
  // reducer      state 업데이트 방식을 지정하는 함수
  // initialstate state 초기값
  const [state, dispatch] = useReducer(reducer, 1);

  const onClickPlus = () => {
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
