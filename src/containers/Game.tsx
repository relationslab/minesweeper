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
      if (user) {
        // return;
        firebase.auth().signOut();
      } else {
        // dispatch(userSetNameAction(user.uid, user.displayName));
      }
    });
  }, [dispatch]);

  const _props = { user };
  return <Game {..._props} />;
};

export default ContainerGame;
