import { Types } from "mongoose";
import { Document, Schema, model } from "mongoose";

interface iAdmin {


  email: string;
  verify: boolean;
  status: string;

  adminName: string;
  address: string;

  avatar: string;
  avatarID: string;


  users: Array<{}>;

  complain: Array<{}>;
}

interface iAdminData extends iAdmin, Document {}

const adminModel = new Schema<iAdminData>(
  {
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },

    address: {
      type: String,
    },

   

    adminName: {
      type: String,
    },
    status: {
      type: String,
    },
   
    email: {
      type: String,
      unique: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },

    

    complain: [
      {
        type: Types.ObjectId,
        ref: "complains",
      },
    ],

   

    users: [
      {
        type: Types.ObjectId,
        ref: "users",
      },
    ],

    
  },
  { timestamps: true }
);

export default model<iAdminData>("admin", adminModel);
