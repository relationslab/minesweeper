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
        const data: Record[] = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data() as Record);
        });
        setRecords(data);
      });
  }, []);

  return <Ranking data={records} />;
};

export default ContainerRanking;
