import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cell from "../components/Cell";
import { RootState } from "../rootReducer";
import { openCell, toggleFlag } from "../modules/Cell/Cell";

const ContainerCell = () => {
  const dispatch = useDispatch();
  const cell = useSelector((state: RootState) => state.cell);

  const handleOpenCell = () => {
    cell.isFlagged = false;
    if (cell.isOpened) {
      return;
    } else {
      dispatch(openCell());
    }
  };
  const handleToggleFlag = (e: React.MouseEvent) => {
    e.preventDefault();
    if (cell.isOpened) {
      return;
    } else {
      dispatch(toggleFlag());
    }
  };

  const _props = { cell, handleOpenCell, handleToggleFlag };

  return <Cell {..._props} />;
};
export default ContainerCell;
