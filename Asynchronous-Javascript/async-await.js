// Creating a Function to fetch Data From an API

async function getBabyNames() {
  try {
    const data = await fetch("https://dog.ceo/api/breeds/list/all");
    const fetchedData = await data.json();
    console.log(fetchedData);
  } catch (error) {
    console.error(error.message);
  }
}
getBabyNames(); //Invoking the function

// Fetch Two

async function getApi() {
  try {
    const fetchedApiData = await fetch("");
    const dataJson = fetchedApiData.json();
  } catch (error) {
    console.error(error);
  }
}
getApi();
