import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(DiaryStateContext);

  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

  return (
    <div>
      <Header
        title={"기록"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />}
      />
      <Viewer initData={curDiaryItem} />
    </div>
  );
};

export default Diary;
