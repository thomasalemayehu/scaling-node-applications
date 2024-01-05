const app = require("express")();

const PORT = process.env.PORT;

if (!PORT) throw new Error("Port not defined");

app.get("/service", (req, res) => {
  console.log(`App on port ${PORT} serving...`);

  res.status(200).send(`<h1>Service Served by app on ${PORT} </h1>`);
});

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});
