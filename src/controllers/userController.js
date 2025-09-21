import User from '../models/userModel.js';

export const createUser=async(req,res,next)=>{
    try{
        const user=await User.create(req.body);
        return res.status(201).json(user)
    }
    catch(err){
        next(err);
    }
}
export const getUsers=async (req,res,next)=>{
    try{
        const users=await User.findAll();
        return res.status(200).json(users);
    }
    catch(err){
        next(err);
    }
}
export const getUserById=async (req,res,next)=>{
    try{
        const userById= await User.findByPk(req.params.id);
        if(!userById){
            return res.status(404).json({
                message:"User not found"
            })
        }
        return res.status(200).json(userById)
    }
    catch(err){
        next(err);
    }
}
export const updateUser=async (req,res,next)=>{
    try{
        const user=await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        const updateuser=await user.update(req.body);
        return res.status(200).json(updateuser);
    }
    catch(err){
        next(err);
    }
}
export const deleteUser=async (req,res,next)=>{
    try{
        const user=await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
        await user.destroy();
        return res.status(200).json({
            message:"User deleted successfully"
        });
    }
    catch(err){
        next(err);
    }
}
