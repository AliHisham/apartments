import express from "express";

import apartmentRoute from "./routes/apartmentRoute";
import { errorMiddleware } from "./middlewares/errorMiddleware";
const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.use("/apartments", apartmentRoute);

app.get("/ping", (req, res) => {
  res.json({ message: "pong" }).status(200);
});
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`);
});
