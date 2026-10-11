const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const sendProposal = async (values) => {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    // fetch does not reject on 404 or 500, so check the status ourselves
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error("Could not send proposal:", error);
    return false;
  }
};