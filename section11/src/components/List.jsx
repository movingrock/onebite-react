import { useContext, useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";
import { useMemo } from "react";
import { TodoStateContext } from "../App";

const List = () => {
  const todos = useContext(TodoStateContext);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") return todos;

    // 값이 변할때마다 호출됨
    // 값이 많아질수록 더 오래걸림
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // 의존성 배열 deps, 배열 안의 값이 변해야 실행
  // 값이 비어있으면 처음에 딱 한번만 실행됨.
  // useMemo가 아닌 일반함수로 제작했을때는 state인 search값이 변할때
  // 같이 값이 변함.
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>total:{totalCount}</div>
      <div>done:{doneCount}</div>
      <div>notDone:{notDoneCount}</div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
