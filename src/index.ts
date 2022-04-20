import express from "express";
// import { promises as fsPromises } from "fs";
import route from "./route";

const app = express();
const port = 3000;

app.use("/api", route);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
