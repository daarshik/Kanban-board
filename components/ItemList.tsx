import React from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

type ItemListProps = {
  nameData: string;
  desc: string;
};

function ItemList({ nameData, desc }: ItemListProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3>{nameData}</h3>
        <p>{desc}</p>
      </div>
      <div className="flex gap-2">
        <RemoveBtn id={""} />
        <Link href={`/editTopic/${""}`}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
}

export default ItemList;
