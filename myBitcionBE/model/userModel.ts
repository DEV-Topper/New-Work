import { Document, Schema, model } from "mongoose";

interface iBitconUser {
  email: string;
  userName: string;
  password: string;
  token: string;
  status: string;
  verify: boolean;
  avater: string;
  avaterID: string;
}

export interface iBitconUserData extends iBitconUser, Document {}

const userModel = new Schema<iBitconUserData>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
    },
    token: {
      type: String,
    },
    avater: {
      type: String,
    },
    avaterID: {
      type: String,
    },
    status: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iBitconUserData>("bitcoins", userModel);
