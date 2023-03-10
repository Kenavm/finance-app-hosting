async function putTransaction(data: {}, id: number) {
    const res = await fetch(`https://defiant-invented-bathtub.glitch.me/api/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
  
  export default putTransaction;
  