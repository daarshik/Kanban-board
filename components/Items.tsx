export default async function Items() {
  const getItem = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topic/column/item", {
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
  const { getAllItem } = await getItem();
  const items = getAllItem;

  return items;
}
