import bcrypt from "bcryptjs";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";


export const approveDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    // Check if the password is being updated
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      {
        $set: {
          isApproved: "approved"
        }
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully approved",
      data: updatedDoctor,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// update Doctor
export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  console.log(req.body)

  try {
    // Check if the password is being updated
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedDoctor = await Doctor.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// delete Doctor
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// getSingle Doctor
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: doctor,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// getAll Doctor
export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;


    if (query == 'all') {
      // Get all approved doctors
      doctors = await Doctor.find({}).select(
        "-password"
      );
    }
    else if (query) {
      // Search based on doctor name or specialization
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } }, // Case-insensitive regex search on the name field
          { specialization: { $regex: query, $options: "i" } }, // Case-insensitive regex search on the specialization field
        ],
      }).select("-password");
    } else {
      // Get all approved doctors
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Successful",
      data: doctors,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// getDoctorProfile
export const getDoctorProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await Doctor.findById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    const appointments = await Booking.find({ doctor: userId });

    const { password, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Successfully fetched profile",
      data: { ...rest, appointments },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong! cannot get!" });
  }
};
