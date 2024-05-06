import { Document, Schema, Types, model } from "mongoose";

interface iComplain {
  title: string;
  reporterID: string;

  importance: string;
  seen: boolean;
  resolve: boolean;

  user: {};
}

interface iComplainData extends iComplain, Document {}

const complainModel = new Schema<iComplainData>(
  {
    title: {
      type: String,
    },

    reporterID: {
      type: String,
    },

    importance: {
      type: String,
    },

    seen: {
      type: Boolean,
      default: false,
    },

    resolve: {
      type: Boolean,
      default: false,
    },

    user: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default model<iComplainData>("complains", complainModel);
