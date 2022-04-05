import express from "express";
import { promises as fsPromises } from "fs";
import routes from "./routes";

const app = express();
const port = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
