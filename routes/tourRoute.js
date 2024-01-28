const express = require("express");
const fs = require("fs");

const {
  postTour,
  getOneTour,
  getTours,
  CheckID,
  CheckPost,
} = require("../controllers/tourController");

const router = express.Router();

router.param("id", CheckID);

router.route("/").get(getTours).post(CheckPost, postTour);
router.route("/:id").get(getOneTour);

module.exports = router;
