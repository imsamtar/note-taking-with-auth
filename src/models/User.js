import mongoose from 'mongoose';

export default mongoose.model('User', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }]
}))