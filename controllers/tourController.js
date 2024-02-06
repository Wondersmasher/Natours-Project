const fs = require("fs");
const mongoose = require("mongoose");
const tourSchema = require("../model/tourModel");

const Tours = mongoose.model("Tours", tourSchema);

exports.postTour = async (req, res) => {
  try {
    const tour = await Tours.create(req.body);
    res.status(201).json({
      status: "success",
      data: { tour },
    });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
};

exports.getTours = async (req, res) => {
  try {
    const tours = await Tours.find();
    res.status(200).json({
      status: "success",
      data: { tours },
    });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
};

// BUG: I found out that the getOneTour route handler returns a success when an item has been deleted it still shows success  with data set to null even if the item is no longer in the database( only happens when you delete an item from the database)
// FIXME: Fix the above bug
exports.getOneTour = async (req, res) => {
  try {
    const tour = await Tours.findById(req.params.id);

    //   const id = Number(req.params.id);
    //   const tour = tours.find((item) => item.id === id);

    res.status(200).json({
      status: "success",
      data: { tour },
    });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tours.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const updatedTour = await Tours.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status().json({ status: "success", data: { tour: updatedTour } });
  } catch (error) {
    console.log(`Error : ${error}`);
    res.status(404).json({
      status: "error",
      message: error,
    });
  }
};
