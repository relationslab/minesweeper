import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import Ranking from "../components/Ranking";
import { Record } from "../config";
import { RootState } from "../rootReducer";
import { RouteComponentProps } from "react-router-dom";
import dayjs from "dayjs";

type State = {
  records: Record[];
  currentRecords: Record[];
  lastRecord: any;
  currentPage: number;
};

const ContainerRanking: React.FC<RouteComponentProps<{ category: string }>> = ({
  history,
  match,
}) => {
  const category = match.params.category;
  const limit = 6;
  const [state, setState] = useState<State>({
    records: [],
    currentRecords: [],
    lastRecord: null,
    currentPage: 1,
  });
  const { records, currentRecords, lastRecord, currentPage } = state;

  const board = useSelector((state: RootState) => state.board);
  const user = useSelector((state: RootState) => state.user);

  const prevDisabled: boolean = currentPage === 1;
  const nextDisabled: boolean =
    currentRecords.length <= 5 ||
    (!lastRecord && currentPage === Math.ceil(records.length / limit));

  //firestoreではdb.collection("records").where("level", "==", board.level).orderBy("createdAt").orderBy("time")...のように複数条件で絞ると無効になってしまうためreact側で日付のfilterを行う
  const rankData = (data: Record[]): Record[] => {
    return data.map((d, i) => {
      return {
        ...d,
        rank: i + 1,
      };
    });
  };

  const today = dayjs().format("YYYY-MM-DD");

  const formatData = useCallback(
    (data: Record[]) => {
      const filterData: Record[] =
        category === "daily"
          ? data.filter((d) => {
              return d.createdAt === today;
            })
          : data;
      const formatData: Record[] = rankData(filterData);
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
    },
    [category, today]
  );

  const ref = useMemo(() => {
    return category === "my"
      ? db
          .collection("records")
          .orderBy("time", "asc")
          .where("level", "==", board.level)
          .where("uid", "==", user.uid)
          .limit(limit)
      : db
          .collection("records")
          .orderBy("time", "asc")
          .where("level", "==", board.level)
          .limit(limit);
  }, [board.level, category, user.uid]);

  useEffect(() => {
    setState({
      records: [],
      currentRecords: [],
      lastRecord: null,
      currentPage: 1,
    });
  }, [category]);

  //初期データの取得
  useEffect(() => {
    let unMounted = false;
    if (!user.name) {
      history.push("/");
    }
    ref.get().then(async (querySnapshot) => {
      const data: Record[] = await querySnapshot.docs.map((doc, i) => {
        const timestamp = doc.get("createdAt").toDate();
        return {
          ...(doc.data() as Record),
          createdAt: dayjs(timestamp).format("YYYY-MM-DD"),
        };
      });
      const newData: Record[] = await formatData(data);
      const lastRecord: any = await querySnapshot.docs[
        querySnapshot.docs.length - 1
      ];
      if (!unMounted) {
        setState({
          records: newData,
          currentRecords: newData,
          lastRecord: lastRecord,
          currentPage: 1,
        });
      }
    });
    return () => {
      unMounted = true;
    };
  }, [ref, formatData, user.name, history]);

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
    user,
    category,
    lastRecord,
    handleClickPrev,
    handleClickNext,
    nextDisabled,
    prevDisabled,
  };

  return <Ranking data={currentRecords} {..._props} />;
};

export default ContainerRanking;
