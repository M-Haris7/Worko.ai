const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// signup controller
const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if(user) {
      return res.status(400).json({msg: 'User already exists'});
    }

    user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET);

    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
}

// login controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user){
      return res.status(400).send('Invalid email or password.');
    } 

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send('Invalid email or password.');
    }

    const token = jwt.sign({ _id: user._id, email: user.email }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { login, signup };
