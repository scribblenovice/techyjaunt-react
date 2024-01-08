import express from "express";
import cors from "cors";
import fetch from "node-fetch"
const server = express();
let api_key = "d84e2d1c-c986-498c-a914-b7e895cb8849";
const port = process.env.PORT || 3001;

const buildPath = path.join(__dirname, "build");

server.use(express.static(buildPath));
server.use(express.json());
server.use(cors());

// cohort registration
server.post("/signup", (req, res)=>{
    const { fullName, email, phoneNumber, selectedCourse, knowlegeOfTechyJaunt, expectation } = req.body;
    let launchpadListId = "af8bb782-cd32-11ed-92c6-4745dc69f879";

  if (
    fullName === "" ||
    email === "" ||
    phoneNumber === "" ||
    selectedCourse === "" ||
    knowlegeOfTechyJaunt === "" ||
    expectation === ""
  ) {
    return res.status(500).json({
      status: "failed",
    });
  }

  console.log("Attempting Sign Up User🧑...", {
    fullName,
    email,
    phoneNumber,
    selectedCourse,
    knowlegeOfTechyJaunt,
    expectation,
  });

   fetch(
    `https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_key,
        email_address: email,
        fields: {
          EmailAddress: email,
          FullName: fullName,
          SelectedCourse: selectedCourse,
          HowYouHeard: knowlegeOfTechyJaunt,
          eventExpectation: expectation
        },
        tags: ["STUDENT"],
        status: "SUBSCRIBED",
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        console.log("Successfuly Subscribed", {
          fullName,
          email
        });

        return res.status(200).json({
          status: "ok",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        console.log("Member Already Signed Up", {
          email,
          fullName
        });

        return res.status(500).json({
          status: "alreadySignedUp",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        console.log("Invalid Parameters ❌", {
          fullName,
          email
        });

        return res.status(500).json({
          status: "failed",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
  })


  // email subscription
server.post("/subscribe", (req, res) => {
  let listId = "56fcc9f4-c91c-11ed-a5a5-197bd1869247";
  const { subscriberName, email} = req.body;

  console.log("Attempting Subscription 🧑...");
  if (email === "" || subscriberName === "") {
    return res.status(400).json({
      status: "failed",
      message: "Bad Request",
    });
  }

   fetch(`https://emailoctopus.com/api/1.6/lists/${listId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        FirstName: subscriberName,
      },
      tags: ["VIP"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "subscribed",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "existing",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(304).json({
          status: "invalid",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        status: "failed",
      });
    });
});

server.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});


server.listen(port, () => {
  console.log("server is running");
});