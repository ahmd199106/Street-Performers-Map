import express from "express";
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Use the cors middleware


app.get("/", (req, res) => {
  res.send("Express independent Backend is working fine");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});