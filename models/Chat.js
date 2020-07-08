// *https://bezkoder.com/mongoose-one-to-many-relationship/ refactor for example
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = mongoose.Schema({
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "public",
  },
  lastMessage: {
    type: Schema.Types.ObjectId,
    ref: "Message",
  },
});
// ChatSchema.virtual("lastMessage", {
//   ref: "Message",
//   // localField: "_id",
//   // foreignField: "blogPostId",
//   // When populating comments, exclude comments that have `deleted`
//   // set to `true`
//   options: { match: { $$last: "$time"  } },
// });

mongoose.model("Chat", ChatSchema);
module.exports = mongoose.model("Chat");
