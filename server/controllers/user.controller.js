import User from "../mongodb/models/user.js";


const getAllUsers = async (req, res) => {
 try {
  const users = await User.find({}).limit(req.query._end);
  res.status(200).json(users);
 } catch (error) {
  res.status(500).json({ message: error.message })
 }
};

const createUser = async (req, res) => {};

const getUserInfoByID = async (req, res) => {
 try {
  const { id } = req.params;
  const user = await User.findOne({ _id: id }).populate('allProperties');
  res.status(200).json(user);
 } catch (error) {
  res.status(500).json({ message: error.message })
 }
};


export {getAllUsers, createUser, getUserInfoByID}