const memMessages = require("../model/memories");
const mongoose = require("mongoose");

exports.getMemories = async (req, res) => {
  try {
    const MemMessages = await memMessages.find();

    res.status(200).json(MemMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createMemory = async (req, res) => {
  try {
    const newMem = await memMessages.create(req.body);
    await newMem.save();
    res.status(201).json(newMem);
  } catch (err) {
    res.status(409).json({ message: err.message });
    console.log(err);
  }
};

exports.deleteMemory = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json("No post with that id");
    }
    await memMessages.findByIdAndRemove(id); 
  } catch (err) {
    res.status(409).json({ message: err });
    console.log(err);
  }
};

exports.updateMemory = async (req, res) => {
  try {
    const { id } = req.params;
    const memory = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json("No post with that id");
    } else {
      const updatedMem = await memMessages.findByIdAndUpdate(id, memory, {
        new: true,
      });
      res.status(200).json(updatedMem);
    }
  } catch (err) {
    res.status(409).json({ message: err.message });
    console.log(err);
  }
};

exports.likeMemory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json("No post with that id");
    } else {
      const memory = await memMessages.findById(id)
      const updatedMem = await memMessages.findByIdAndUpdate(id, {likeCount: memory.likeCount + 1 }, {
        new: true,
      });
      res.status(200).json(updatedMem);
    }
  } catch (err) {
    res.status(409).json({ message: err.message });
    console.log(err);
  }
};
