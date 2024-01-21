import mongoose from "mongoose";
import User from "../models/User";

export const addScore = async (req, res) => {
  // Request body will consist of three properties {Name, Roll Number, Score}

  const { Name, Roll_No, Score } = req.body; //Destructuring object properties.

  const user =
    (await User.findOne({ Name })) || (await User.findOne({ Roll_No }));
  if (user) {
    user.Score = Score;
  } else {
    user = new User({ Name, Roll, Score });
  }

  await user.save();
  return res.status(200).json({
    message: "User's details were Updated!",
    description:
      "New Score of player was updated in the DB and can now be accessed through the appropriate endpoint.",
  });
};
