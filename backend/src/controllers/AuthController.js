import login from "../repositories/login";

const guestLogin = async (req, res, next) => {
  try {
    const { guestName } = req.body;
    if (!guestName) {
      throw { name: "GuestNameRequired" };
    }

    const userLogin = await login(guestName);
    if (!userLogin.name) {
      res.status(200).json({
        msg: "Login success",
        name: userLogin,
      });
    }
    res.status(200).json({
      msg: "Login success",
      name: userLogin.name,
    });
  } catch (err) {
    next(err);
  }
};

export { guestLogin };
