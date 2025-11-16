// This file isolates all communication with the backend

export async function getAvgReturnById(id) {
  const res = await fetch(`http://localhost:5000/api/stats/${id}`);
  console.log(res);

  if (!res.ok) throw new Error("Failed to fetch avg return by id");

  const data = await res.json();
  return data.avgReturn;
}
