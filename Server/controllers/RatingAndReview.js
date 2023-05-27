const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");

// create rating
exports.createRating = async (req, res) => {
  try {
    // get user id
    const userId = req.user.id;
    // fetch data from user body
    const { rating, review, courseId } = req.body;
    // validate if the user is enrolled in this course
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    });
    if (!courseDetails) {
      return res.status(400).json({
        success: false,
        message: "Student is not enrolled in the course",
        data: courseDetails,
      });
    }
    // check if user has already reviewed the course
    const alreadyReviewed = await RatingAndReview.findOne({
      user: userId,
      course: courseId,
    });
    if (alreadyReviewed) {
      return res.status(403).json({
        success: false,
        message: "Student have already reviewed the course",
        data: courseDetails,
      });
    }
    // create rating and review
    const ratingReview = await RatingAndReview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });

    // update course with this rating/review
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          ratingAndReviews: ratingReview._id,
        },
      },
      { new: true }
    );

    console.log(updatedCourseDetails);

    // return the response
    return res.status(200).json({
      success: true,
      message: "Rating and Review has been created successfylly",
      data: courseDetails,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get average rating
exports.getAverageRating = async (req, res) => {
  try {
    // get courseid
    const courseId = req.body.courseId;
    // calculate average rating
    const result = await RatingAndReview.aggregate([
      {
        $match: {
          course: new mongoose.Types.ObjectId(courseId),
        },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);
    // return rating
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }
    // if no rating and review exist
    return res.status(200).json({
      success: true,
      mesaage: "Average rating is 0, no ratings found",
      averageRating: 0,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get all ratings

exports.getAllRating = async (req, res) => {
  try {
    const allReviews = RatingAndReview.find({})
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName lastName email image",
      })
      .populate({
        path: "course",
        select: "courseName",
      })
      .exec();
    return res.status(200).josn({
      success: true,
      message: "All reviews fetched successfully",
      data: allReviews,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
