async function postTransaction(data: {}) {
  const res = await fetch("https://defiant-invented-bathtub.glitch.me/api/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export default postTransaction;
