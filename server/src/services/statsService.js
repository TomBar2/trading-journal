import prismaClient from "../db/prismaClient.js";

/***

 ***/
export async function getAvgReturnById(userId) {
  const trades = await prismaClient.trades.findMany({
    where: {
      user_id: userId,
      is_open: false,
    },
  });

  if (trades.length === 0) {
    return 0;
  }

  const returns = trades.map((t) => {
    const entry = Number(t.entry_price);
    const exit = Number(t.exit_price);
    return ((exit - entry) / entry) * 100; // percentage
  });

  let sum = 0;
  for (const ret of returns) {
    sum += ret;
  }

  return sum / returns.length;
}
