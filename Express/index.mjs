import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, userName: "anson", displayname: "Anson" },
  { id: 1, userName: "linda", displayname: "Linda" },
  { id: 2, userName: "tony", displayname: "Tony" },
  { id: 3, userName: "beatrice", displayname: "Beatrice" },
];

// GET REQUEST
app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello World" });
});

// GET USERS
app.get("/api/users", (request, response) => {
  response.send(mockUsers);
});

// GET PRODUCTS
app.get("/api/products", (requests, response) => {
  response.send([{ id: 123, name: "Chicken Breasts", price: 12.99 }]);
});

// GET USER BY ID
app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
  const parsedId = parseInt(request.params.id);
  console.log(parsedId);
  if (isNaN(parsedId)) return response.status(400).send({ msg: "Bad Request" });
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});
