import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Ranking from "../components/Ranking";
import { Record } from "../config";

const ContainerRanking = () => {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    db.collection("records")
      .orderBy("time", "asc")

      .get()
      .then((querySnapshot) => {
        const data: Record[] = querySnapshot.docs.map((doc, i) => {
          return { ...(doc.data() as Record), rank: i + 1 };
        });
        setRecords(data);
      });
  }, []);

  console.log(records);
  return <Ranking data={records} />;
};

export default ContainerRanking;
