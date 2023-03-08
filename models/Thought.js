const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 250,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // ????

    },
    // ((The user that created this thought))
    username: {                     
        type: String,
        required: true,


    },
    // (These are like replies)
    reactions: {
        // Array of nested documents created with the reactionSchema

    },
})