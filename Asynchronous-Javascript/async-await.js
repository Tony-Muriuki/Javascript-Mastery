// Creating a Function to fetch Data From an API

async function getBabyNames() {
  try {
    const data = await fetch("https://dog.ceo/api/breeds/list/all");
    const dataJson = await data.json();
    console.log(dataJson);
  } catch (error) {
    console.error(error.message);
  }
}
getBabyNames(); //Invoking the function
