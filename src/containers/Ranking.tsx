import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import Ranking from "../components/Ranking";
import { Record } from "../config";
import { RootState } from "../rootReducer";

const ContainerRanking = () => {
  const limit = 6;
  const [records, setRecords] = useState<Record[]>([]);
  const [currentRecords, setCurrentRecords] = useState<Record[]>([]);
  const [lastRecord, setLastRecord] = useState();
  const [history, setHistory] = useState(limit);
  const [currentPage, setPage] = useState(1);

  const board = useSelector((state: RootState) => state.board);

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentRecords.length <= 5 || !lastRecord;

  //初期データの取得
  useEffect(() => {
    db.collection("records")
      .where("level", "==", board.level)
      .orderBy("time", "asc")
      .limit(12)
      .get()
      .then((querySnapshot) => {
        const data: Record[] = querySnapshot.docs.map((doc, i) => {
          return { ...(doc.data() as Record), rank: i + 1 };
        });
        const lastRecord: any =
          querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastRecord(lastRecord);
        setRecords(data);
        setCurrentRecords(data);
        setHistory(12);
        setPage(1);
      });
  }, [board]);

  const handleClickPrev = () => {
    const offset = (currentPage - 2) * limit;
    setCurrentRecords(records.slice(offset, offset + limit));
    setPage(currentPage - 1);
  };

  const handleClickNext = async (lastRecord: any) => {
    const offset = currentPage * limit;

    //取得データの末尾に進んだ場合
    if (currentPage === Math.ceil(records.length / limit)) {
      await db
        .collection("records")
        .where("level", "==", board.level)
        .orderBy("time", "asc")
        .startAfter(lastRecord)
        .limit(limit)
        .get()
        .then((querySnapshot) => {
          const data: Record[] = querySnapshot.docs.map((doc, i) => {
            return { ...(doc.data() as Record), rank: history + 1 + i };
          });
          const newData = [...records, ...data];
          setRecords(newData);
          setCurrentRecords(newData.slice(offset, offset + limit));
          const lastRecord: any =
            querySnapshot.docs[querySnapshot.docs.length - 1];
          querySnapshot.docs.length <= 0
            ? setLastRecord(undefined)
            : setLastRecord(lastRecord);
          setHistory(history + limit);
          setPage(currentPage + 1);
        });
    } else {
      await setCurrentRecords(records.slice(offset, offset + limit));
      setPage(currentPage + 1);
    }
  };

  const _props = {
    lastRecord,
    handleClickPrev,
    handleClickNext,
    nextDisabled,
    prevDisabled,
  };

  return <Ranking data={currentRecords} {..._props} />;
};

export default ContainerRanking;
