import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cell from "../components/Cell";
import { openCell } from "../modules/Cell";
import { RootState } from "../rootReducer";

const ContainerCell = () => {
  const dispatch = useDispatch();
  const cell = useSelector((state: RootState) => state.cell);

  const handleOpenCell = () => dispatch(openCell());

  const _props = { cell, handleOpenCell };

  return <Cell {..._props} />;
};
export default ContainerCell;
