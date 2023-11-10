import React from "react";
import ColumnList from "./ColumnList";
import Btn from "./Btn";
import Item from "@/models/kanbanItem";
import Items from "./Items";

type Kboard = {
  _id: string;
  name: string;
  description: string;
};
type Kcolumn = {
  _id: string;
  name: string;
  boardId: string;
};

const getBoards = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topic", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch board");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading boards: ", error);
  }
};
const getColumn = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topic/column", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch column data");
    }

    return res.json();
  } catch (error) {
    console.error("Error loading column data: ", error);
    throw error;
  }
};

export default async function BoardList() {
  const { boards } = await getBoards();

  const { getAllColumn } = await getColumn();

  const columns = getAllColumn;

  return (
    <div>
      {boards.map((t: Kboard, index: number) => (
        <div className="p-4 border my-3 border-slate-300 flex-col justify-between">
          <div className="flex justify-between items-center gap-5 my-3">
            <div>
              <h2 className="font-bold text-2xl">{t.name}</h2>
              <div>{t.description}</div>
            </div>
            <div className="flex gap-2">
              <Btn id={t._id} />
            </div>
          </div>

          {columns.map((column: Kcolumn) => (
            <div className="my-3 border-2 border-slate-300 rounded-lg p-4 flex-col justify-between items-center">
              <p>{columns.name}</p>
              <ColumnList id={column._id} name={column.name}/>
              {/* <Items id={column._id} name={column.name} /> */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
