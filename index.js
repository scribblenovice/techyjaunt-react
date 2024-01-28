import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import path from "path";
import { getGlobals } from "common-es";
import dotenv from "dotenv";
dotenv.config();
const { __dirname, __filename } = getGlobals(import.meta.url);
const server = express();
let api_key = process.env.VITE_EMAIL_OCTOPUS_API_KEY;
const port = process.env.PORT || 3001;

const buildPath = path.join(__dirname, "dist");

server.use(express.static(buildPath));
server.use(express.json());
server.use(cors());

// cohort registration
server.post("/signup", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    selectedCourse,
    knowlegeOfTechyJaunt,
    expectation,
  } = req.body;
  let launchpadListId = "06ba6394-abf1-11ee-8ac2-07cd7c67eebe";

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    selectedCourse === "" ||
    knowlegeOfTechyJaunt === ""
  ) {
    return res.status(500).json({
      status: "failed",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        SelectedCourse: selectedCourse,
        HowYouHeard: knowlegeOfTechyJaunt,
        Expectation: expectation,
      },
      tags: ["STUDENT"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "alreadysignedup",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
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
});

// email subscription
server.post("/subscribe", (req, res) => {
  let listId = "56fcc9f4-c91c-11ed-a5a5-197bd1869247";
  const { firstName, lastName, email } = req.body;

  if (email === "" || firstName === "" || lastName === "") {
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
        FirstName: firstName,
        LastName: lastName,
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

//payment
server.post("/payment", (req, res) => {
  let paidListId = "688c74b4-afe2-11ee-9534-f9dec77b0681";
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    selectedCourse,
    completedPayment,
  } = req.body;

  if (
    email === "" ||
    firstName === "" ||
    lastName === "" ||
    selectedCourse === "" ||
    completedPayment != "yes"
  ) {
    return res.status(500).json({
      status: "failed",
      message: "Bad Request",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${paidListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        SelectedCourse: selectedCourse,
        PhoneNumber: phoneNumber,
        HasPaid: completedPayment,
      },
      tags: ["PAID"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "paid",
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

// TECHYJAUNT EVENT REGISTRATION
server.post("/event-register", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    stateAttendedFrom,
    // knowlegeOfTechyJaunt,
    expectation,
  } = req.body;
  let launchpadListId = "06ba6394-abf1-11ee-8ac2-07cd7c67eebe";

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    phoneNumber === "" ||
    stateAttendedFrom === ""
    // knowlegeOfTechyJaunt === ""
  ) {
    return res.status(500).json({
      status: "failed",
    });
  }

  fetch(`https://emailoctopus.com/api/1.6/lists/${launchpadListId}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key,
      email_address: email,
      fields: {
        EmailAddress: email,
        FirstName: firstName,
        LastName: lastName,
        State: stateAttendedFrom,
        Expectation: expectation,
      },
      tags: ["EVENT"],
      status: "SUBSCRIBED",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "SUBSCRIBED") {
        return res.status(200).json({
          status: "registered",
        });
      }
      if (data.error.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
        return res.status(200).json({
          status: "alreadyregistered",
        });
      }
      if (data.error.code === "INVALID_PARAMETERS") {
        return res.status(200).json({
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
});

server.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

server.listen(port, () => {
  console.log("server is running");
});
