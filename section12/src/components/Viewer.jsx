import EmotionItem from "./EmotionItem";
import { DiaryStateContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Viewer = ({ initData }) => {
  const params = useParams();

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const nav = useNavigate();

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  return (
    <div>
      <section>
        <h4>오늘의 감정</h4>
        <EmotionItem emotionId={input.emotionId} />
      </section>
      <section>
        <h4>오늘의 일기</h4>
        <div>{input.content}</div>
      </section>
    </div>
  );
};

export default Viewer;
