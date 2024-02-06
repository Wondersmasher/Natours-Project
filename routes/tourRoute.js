const express = require("express");
const fs = require("fs");

const {
  postTour,
  getOneTour,
  getTours,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");

const router = express.Router();

// router.param("id", CheckID);
// router.route("/").get(getTours).post(CheckPost, postTour);

router.route("/").get(getTours).post(postTour);
router.route("/:id").get(getOneTour).patch(updateTour).delete(deleteTour);

module.exports = router;
