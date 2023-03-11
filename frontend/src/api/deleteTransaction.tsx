async function deleteTransaction(id: number) {
    const res = await fetch(`https://defiant-invented-bathtub.glitch.me/api/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  
  export {deleteTransaction as deleteTransactionRequest};
  