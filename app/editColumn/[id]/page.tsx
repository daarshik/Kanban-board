import EditColForm from "@/components/EditColForm";

export default async function EditColumn({
  params: { id },
}: {
  params: { id: string };
}) {
  return <EditColForm id={id} />;
}
