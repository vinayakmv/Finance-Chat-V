const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.json({ success: true, userId: user._id });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ message: "Error", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.json({ success: true, userId: user._id });
  } catch (err) { res.status(500).json({ message: "Error" }); }
};