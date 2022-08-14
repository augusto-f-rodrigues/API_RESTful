import { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {type: String},
        age: {type: Number},
        job: {type: String},
        hobbies: {type: Array}
    },
    {
        timestamps: true,
    }
);

export const UserModel = model("User", userSchema);
