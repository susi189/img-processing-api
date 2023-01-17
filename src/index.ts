import express, { application } from "express";
import routes from "./routes";

const app = express();
const port = 4100;

app.get("/", (req, res) => {
  res.json("Welcome to the image processing API");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
