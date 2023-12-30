import express from "express";
import cors from "cors";
const server = express();
server.use(express.json());
server.use(cors());
const port = process.env.PORT || 3001;
server.post("/launchpad/signup",(req, res)=>{
    const { fullName, email, phoneNumber, selectedCourse, knowlegeOfTechyJaunt, expectation } = req.body;
})


server.listen(port, () => {
  console.log("server is running");
});