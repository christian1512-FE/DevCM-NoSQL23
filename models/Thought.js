const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(), // Assigment #25

    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
},
{
    toJSON: {
        getters: true,
    },
    id: false,
});


const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    // (These are like replies)   // This will include an array that holds all the reaction (assigment #18 on class)

    reactions: [reactionSchema],            //Example Assigment #25 (video.js)     // Array of nested documents created with the reactionSchema
},
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

// Create a virtual called reactionCount that retrieves the length of 
// the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
