const mongoose = require('mongoose'); 

const postSchema = mongoose.Schema(
{ 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  book: {
    title: String, 
    genre: String, 
    author: String, 
    publisher: String,
    selectedFile: String,
    releaseDate: {
      type: Date,
      default: new Date(),
    },
  },
},
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('PostBook', postSchema);