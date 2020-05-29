import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import Ranking from "../components/Ranking";
import { Record } from "../config";
import { RootState } from "../rootReducer";

const ContainerRanking = () => {
  const [records, setRecords] = useState<Record[]>([]);
  const board = useSelector((state: RootState) => state.board);

  useEffect(() => {
    db.collection("records")
      .where("level", "==", board.level)
      .orderBy("time", "asc")
      .get()
      .then((querySnapshot) => {
        const data: Record[] = querySnapshot.docs.map((doc, i) => {
          return { ...(doc.data() as Record), rank: i + 1 };
        });
        setRecords(data);
      });
  }, [board.level]);

  return <Ranking data={records} />;
};

export default ContainerRanking;
