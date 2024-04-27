import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({ 
    
    email:{
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Please provide an email'],
    },
    username:{
        type: String,
        required: [true, 'Please provide a username'],
    },
    image:{
        type: String,
    },
    bookmarks: [{
        type: Schema.Types.ObjectId,
        ref: 'Property'
    }],
    

    
},{
    timestamps: true
});

const User = models.User || model('User', UserSchema);

export default User;