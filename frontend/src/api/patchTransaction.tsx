async function patchTransaction(data: {}, id: number) {
    const res = await fetch(`https://defiant-invented-bathtub.glitch.me/api/transactions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  
  export default patchTransaction;
  