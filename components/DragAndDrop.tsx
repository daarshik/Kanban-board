import ItemList from "./ItemList";
import React from "react";

type DataItem = {
  id: string;
  nameData: string;
  desc: string;
};

function Itemfxn() {
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

  return (
    <div>
      {data.map((item: DataItem, index: number) => (
        <div
          className="border-2 border-slate-300 rounded-lg p-4 my-3"
          key={index}
        >
          <ItemList nameData={item.nameData} desc={item.desc} />
        </div>
      ))}
    </div>
  );
}

export default Itemfxn;
