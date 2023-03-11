async function fetchTransactions(dateOrAmount?: string) {
  const baseUrl: string = `https://defiant-invented-bathtub.glitch.me/api/transactions?sort=${dateOrAmount}`;
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
}

export default fetchTransactions;
