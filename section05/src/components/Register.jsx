import { useRef, useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // const [name, setName] = useState("이름");
  // const [birth, setBirth] = useState("");
  // const [country, setCountry] = useState("");
  // const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // const refObj = useRef(0);
  // console.log(refObj);
  // console.log(refObj.current);

  const countRef = useRef(0);
  const inputRef = useRef();

  // 만약 그냥 let으로 변수를 만든다면
  // let count = 0;
  // state가 변경되면서 리렌더링이 계속 되기 때문에
  // count값은 계속 0으로 초기화가 된다.
  // 하지만 ref값은 초기화가 되지는 않는다.

  const onChange = (e) => {
    // console.log(e);
    countRef.current++;
    // console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  // const onChangeName = (e) => {
  //   setInput({
  //     ...input,
  //     name: e.target.value,
  //   });
  // };

  // const onChangeBirth = (e) => {
  //   setInput({
  //     ...input,
  //     birth: e.target.value,
  //   });
  // };

  // const onChangeCountry = (e) => {
  //   setInput({
  //     ...input,
  //     country: e.target.value,
  //   });
  // };

  // const onChangeBio = (e) => {
  //   console.log(e);
  //   setInput({
  //     ...input,
  //     bio: e.target.value,
  //   });
  // };

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  //   console.log(e.target.value);
  // };

  // const onChangeBirth = (e) => {
  //   setBirth(e.target.value);
  //   console.log(e.target.value);
  // };

  // const onChangeCountry = (e) => {
  //   setCountry(e.target.value);
  //   console.log(e.target.value);
  // };

  // const onChangeBio = (e) => {
  //   setBio(e.target.value);
  //   console.log(e.target.value);
  // };

  return (
    <div>
      <div>
        <input //
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
