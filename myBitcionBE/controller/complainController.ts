import { Request, Response } from "express";
import userModel from "../model/userModel";
import complainModel from "../model/complainModel";
import { Types } from "mongoose";
import adminModel from "../model/adminModel";


export const createUserComplain = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { userID } = req.params;
      const { title, importance } = req.body;
  
      const user: any = await userModel.findById(userID);
      const admin = await adminModel.findById(user?.adminIDs!);
  
      if (user) {
        const complain = await complainModel.create({
          reporterID: userID,
          title,
          importance,
        });
  
        user?.complain.push(new Types.ObjectId(complain._id));
        user.save();
  
        admin?.complain.push(new Types.ObjectId(complain._id));
        admin?.save();
  
        return res.status(201).json({
          message: "user complain posted successfully",
          data: complain,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "user must exist",
          status: 404,
        });
      }
    } catch (error: any) {
      return res.status(404).json({
        message: "Error creating user session",
        data: error.message,
        status: 404,
      });
    }
  };


  export const markResolveComplain = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { adminID, complainID } = req.params;
  
      const admin = await adminModel.findById(adminID);
  
      if (admin) {
        const complain = await complainModel.findByIdAndUpdate(
          complainID,
          { resolve: true },
          { new: true }
        );
  
        return res.status(201).json({
          message: "mark complain resolved successfully",
          data: complain,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "admin must exist",
          status: 404,
        });
      }
    } catch (error: any) {
      return res.status(404).json({
        message: "Error creating school session",
        data: error.message,
        status: 404,
      });
    }
  };


  export const viewUsersComplains = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { userID } = req.params;
  
      const complain = await userModel.findById(userID).populate({
        path: "complain",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      });
  
      return res.status(201).json({
        message: "view complain successfully",
        data: complain,
        status: 201,
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "Error creating admin session",
        data: error.message,
        status: 404,
      });
    }
  };
  

  export const markAsSeenComplain = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      const { adimnID, complainID } = req.params;
  
      const admin = await adminModel.findById(adimnID);
  
      if (admin) {
        const complain = await complainModel.findByIdAndUpdate(
          complainID,
          { seen: true },
          { new: true }
        );
  
        return res.status(201).json({
          message: "mark complain seen successfully",
          data: complain,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "school must exist",
          status: 404,
        });
      }
    } catch (error: any) {
      return res.status(404).json({
        message: "Error creating school session",
        data: error.message,
        status: 404,
      });
    }
  };
  