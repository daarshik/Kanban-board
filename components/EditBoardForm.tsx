"use client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

type EditBoardFormProps = {
  id: string;
};

export default function EditBoardForm({ id }: EditBoardFormProps) {
  const [newName, setNewname] = useState("");
  const [newDescription, setNewdescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topic/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewname(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewdescription(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={handleNameChange}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Board Name"
      />

      <input
        onChange={handleDescriptionChange}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Board Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Board
      </button>
    </form>
  );
}
