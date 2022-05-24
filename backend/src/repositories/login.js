import Guests from "../models/guest";

const login = async (guestName) => {
  try {
    const isUserExists = await Guests.findOne({ name: guestName });
    if (!isUserExists || !isUserExists.name || isUserExists === null) {
      const newGuest = await Guests.create({ name: guestName });
      return newGuest;
    }
    return guestName;
  } catch (err) {
    return { name: "InternalError" };
  }
};

export default login;
