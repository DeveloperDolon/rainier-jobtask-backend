const User = require("../model/userSchema");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/userRoutes");
require("dotenv").config();



const userRegister = async (req, res) => {
  
  const { userName, email, password } = req.body;
  const isExist = await User.findOne({ email });
  if(isExist) {
    return res.status(403).send({message: "User already exists!"})
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

  res.status(201).send(user);
  console.log("hashedPassword : ", hashedPassword);
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          userName: user.userName,
          email: user.email,
          id: user.id,
        },
      },
      process.env.SECRET,
      { expiresIn: "6h" }
    );
    res.json({ accessToken, user: user });
  }
};

const userProfile = (req, res) => {
  res.json({ message: "user page.." });
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;

  const result = await User.findById(id);
  res.send(result);
}

module.exports = { userRegister, userLogin, userProfile, getSingleUser };
