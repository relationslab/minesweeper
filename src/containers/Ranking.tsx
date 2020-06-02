import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import Ranking from "../components/Ranking";
import { Record } from "../config";
import { RootState } from "../rootReducer";
type State = {
  records: Record[];
  currentRecords: Record[];
  lastRecord: any;
  history: number;
  currentPage: number;
};

const ContainerRanking = () => {
  const limit = 6;
  const [state, setState] = useState<State>({
    records: [],
    currentRecords: [],
    lastRecord: null,
    history: limit,
    currentPage: 1,
  });
  const { records, currentRecords, lastRecord, history, currentPage } = state;

  const board = useSelector((state: RootState) => state.board);

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentRecords.length <= 5 || !lastRecord;

  //同率の検索
  const formatData = (data: Record[]) => {
    const formatData: Record[] = [...data];
    console.log(formatData.length);
    for (let i = 0; i < formatData.length; i++) {
      const j = i + 1 === formatData.length ? i : i + 1;
      if (formatData[i].time === formatData[j].time) {
        formatData[j].rank = formatData[i].rank;
      }
    }
    return formatData;
  };

  //初期データの取得
  useEffect(() => {
    db.collection("records")
      .where("level", "==", board.level)
      .orderBy("time", "asc")
      .limit(limit)
      .get()
      .then(async (querySnapshot) => {
        const data: Record[] = await querySnapshot.docs.map((doc, i) => {
          return { ...(doc.data() as Record), rank: i + 1 };
        });
        const newData: Record[] = formatData(data);
        const lastRecord: any =
          querySnapshot.docs[querySnapshot.docs.length - 1];
        setState({
          records: newData,
          currentRecords: newData,
          lastRecord: lastRecord,
          history: limit,
          currentPage: 1,
        });
      });
  }, [board]);

  const handleClickPrev = () => {
    const offset = (currentPage - 2) * limit;
    setState({
      ...state,
      currentRecords: records.slice(offset, offset + limit),
      currentPage: currentPage - 1,
    });
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
          const newData = formatData([...records, ...data]);
          const lastRecord: any =
            querySnapshot.docs[querySnapshot.docs.length - 1];

          setState({
            ...state,
            records: newData,
            currentRecords: newData.slice(offset, offset + limit),
            lastRecord: querySnapshot.docs.length <= 0 ? undefined : lastRecord,
            history: history + limit,
            currentPage: currentPage + 1,
          });
        });
    } else {
      await setState({
        ...state,
        currentRecords: records.slice(offset, offset + limit),
        currentPage: currentPage + 1,
      });
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
