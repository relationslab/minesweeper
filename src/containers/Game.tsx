import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/rootReducer";
import { userSetNameAction } from "../reducers/User";
import Game from "../components/Game";
import firebase from "../firebase";

const ContainerGame = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return;
      } else {
        dispatch(userSetNameAction("hoge", "hoge"));
      }
    });
  }, [dispatch]);

  const _props = { user };
  return <Game {..._props} />;
};

export default ContainerGame;
