"use client";
import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import ItemList from "./ItemList";
import Btn from "./Btn";
import { RiFolderAddLine } from "react-icons/ri";
import RemoveColBtn from "./RemoveColBtn";
import { HiPencilAlt } from "react-icons/hi";
import Link from "next/link";

function ColumnList({ id, name }: { id: string; name: string }) {
  const data: DataItem[] = [
    {
      id: "Id1",
      nameData: "Item1",
      desc: "desc1",
    },
    {
      id: "Id2",
      nameData: "Item2",
      desc: "desc2",
    },
    {
      id: "Id3",
      nameData: "Item3",
      desc: "desc3",
    },
    {
      id: "Id4",
      nameData: "Item4",
      desc: "desc4",
    },
  ];

  const [characters, updateCharacters] = useState(data);

  type DataItem = {
    id: string;
    nameData: string;
    desc: string;
  };

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex justify-between my-3">
        <h2 className="text-lg">{name}</h2>
        <div className="flex justify-around">
          <RemoveColBtn id={id} />
          <Link href={`/editColumn/${id}`}>
            <HiPencilAlt size={24} />
          </Link>
          <Link href={`/Item/${id}`}>
            <RiFolderAddLine size={24} color="black" />
          </Link>
        </div>
      </div>

      <Droppable droppableId="characters">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {characters.map((item: DataItem, index: number) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    key={item.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div className="border-2 border-slate-300 rounded-lg p-4 my-3">
                      <ItemList nameData={item.nameData} desc={item.desc} />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ColumnList;
