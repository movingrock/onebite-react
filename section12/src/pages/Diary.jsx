import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const nav = useNavigate();
  const params = useParams();
  const data = useContext(DiaryStateContext);

  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) return <div>데이터 로딩중...!</div>;

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)} />}
      />
      <Viewer initData={curDiaryItem} />
    </div>
  );
};

export default Diary;
