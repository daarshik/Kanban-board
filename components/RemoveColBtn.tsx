"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

type RemoveColBtnProps = {
  id: string;
};
export default function RemoveColBtn({ id }: RemoveColBtnProps) {
  const router = useRouter();
  const removeColBoard = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(
        `http://localhost:3000/api/topic/column?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeColBoard} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
