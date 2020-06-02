import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/rootReducer";
import firebase from "../firebase";
import { userSetNameAction } from "../reducers/User";

import Game from "../components/Game";

const ContainerGame = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        return;
      } else {
        const name = user.displayName;
        dispatch(userSetNameAction(user.uid, user.displayName));
        console.log(name);
      }
    });
  }, [dispatch]);

  const _props = { user };
  return <Game {..._props} />;
};

export default ContainerGame;
