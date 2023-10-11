import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    verifyToken: String,
    verifyExpiry: Date,
    PassToken: String,
    PassTokenExpiry: Date,
  },
  { timestamps: true } //createdAt:    UpdatedAT:
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
