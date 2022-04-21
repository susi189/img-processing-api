import express from "express";
import route from "./routes";

const app = express();
const port = 3000;

app.use("/api", route, (req, res) => {
  res.send("image processing");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
