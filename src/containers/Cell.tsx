import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cell from "../components/Cell";
import { RootState } from "../rootReducer";
import { openCell, toggleFlag } from "../modules/Cell";

const ContainerCell = () => {
  const dispatch = useDispatch();
  const cell = useSelector((state: RootState) => state.cell);

  const handleOpenCell = () => dispatch(openCell());
  const handleToggleFlag = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(toggleFlag());
  };

  const _props = { cell, handleOpenCell, handleToggleFlag };

  return <Cell {..._props} />;
};
export default ContainerCell;
