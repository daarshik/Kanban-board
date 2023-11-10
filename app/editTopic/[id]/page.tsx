import EditBoardForm from "@/components/EditBoardForm";

// const getBoardById = async (id: string) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/topic/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch board");
//     }

//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default async function EditBoard({
  params: { id },
}: {
  params: { id: string };
}) {
  return <EditBoardForm id={id} />;
}
