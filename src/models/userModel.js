import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User=sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},
{
        timestamps:true,
    })
export default User;
