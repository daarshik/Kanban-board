import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { RiFolderAddLine } from "react-icons/ri";

function Btn({ id }: { id: string }) {
  return (
    <div className="flex gap-2">
      <RemoveBtn id={id} />
      <Link href={`/editTopic/${id}`}>
        <HiPencilAlt size={24} />
      </Link>
      <Link href={`/addCol/${id}`}>
        <RiFolderAddLine size={24} color="black" />
      </Link>
    </div>
  );
}

export default Btn;
