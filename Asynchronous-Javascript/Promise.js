async function getDogs() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();

    // Printing API DATA
    console.log(data);
  } catch (error) {
    // If something goes wrong
    console.error("Error fetching users:", error);
  }
}
getDogs();
