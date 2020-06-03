import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import Ranking from "../components/Ranking";
import { Record } from "../config";
import { RootState } from "../rootReducer";
import dayjs from "dayjs";
import firebase from "../firebase";

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
  const nextDisabled =
    currentRecords.length <= 5 ||
    (!lastRecord && currentPage === Math.ceil(records.length / limit));

  //firestoreではdb.collection("records").where("level", "==", board.level).orderBy("createdAt").orderBy("time")...のように複数条件で絞るとエラーがでるためreact側でsortを行う
  const sortByTime = (data: Record[]): Record[] => {
    data.sort((a: Record, b: Record) => {
      if (a.time < b.time) {
        return -1;
      } else {
        return 1;
      }
    });
    return data;
  };

  const rankData = (data: Record[]): Record[] => {
    return data.map((d, i) => {
      return {
        ...d,
        rank: i + 1,
      };
    });
  };
  const formatData = useCallback((data: Record[]) => {
    const sortByTimeData: Record[] = sortByTime(data);
    const formatData: Record[] = rankData(sortByTimeData);

    //同率の検索
    for (let i = 0; i < formatData.length; i++) {
      const j = i + 1 === formatData.length ? i : i + 1;
      if (formatData[i].time === formatData[j].time) {
        formatData[j].rank = formatData[i].rank;
      } else {
        formatData[j].rank = formatData[i].rank + 1;
      }
    }
    return formatData;
  }, []);

  const nextDay = useMemo(() => {
    return dayjs().add(1, "day").format("YYYY MM DD");
  }, []);
  const start = useMemo(() => {
    return firebase.firestore.Timestamp.now();
  }, []);
  const end = useMemo(() => {
    return firebase.firestore.Timestamp.fromDate(new Date(nextDay));
  }, [nextDay]);

  const ref = db
    .collection("records")
    .where("level", "==", board.level)
    .orderBy("createdAt")
    .startAt(start)
    .endAt(end)
    .limit(limit);

  //初期データの取得
  useEffect(() => {
    db.collection("records")
      .where("level", "==", board.level)
      .orderBy("createdAt")
      .startAt(start)
      .endAt(end)
      .limit(limit)
      .get()
      .then(async (querySnapshot) => {
        const data: Record[] = await querySnapshot.docs.map((doc, i) => {
          const timestamp = doc.get("createdAt").toDate();
          return {
            ...(doc.data() as Record),
            createdAt: dayjs(timestamp).format("YYYY-MM-DD"),
          };
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
  }, [board, start, end, formatData]);

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
      await ref
        .startAfter(lastRecord)
        .get()
        .then(async (querySnapshot) => {
          const data: Record[] = querySnapshot.docs.map((doc, i) => {
            const timestamp = doc.get("createdAt").toDate();
            return {
              ...(doc.data() as Record),
              createdAt: dayjs(timestamp).format("YYYY-MM-DD"),
            };
          });

          const newData: Record[] = formatData([...records, ...data]);
          console.log(newData);
          const lastRecord: any =
            querySnapshot.docs[querySnapshot.docs.length - 1];

          const nextRecord = await ref
            .startAfter(lastRecord)
            .get()
            .then((d) => {
              return d.docs.length;
            });

          setState({
            ...state,
            records: newData,
            currentRecords: newData.slice(offset, offset + limit),
            //最大データ数が6で割れる場合は次へを押せないようにする
            lastRecord: nextRecord === 0 ? undefined : lastRecord,
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
