import mongoose from "mongoose";
import User from "../models/User";

export const retrieveScores = async (req, res) => {
  const users = await User.find({})
    .sort({ Score: -1 })
    .limit(process.env.USERS_TO_BE_DISPLAYED);
  if (!users) {
    return res
      .status(400)
      .json({
        message: "Invalid Query!",
        description:
          "The query of the given request cannot be executed by mongoose appropriately!",
      });
  }

  return res.status(200).json({ users });
};
