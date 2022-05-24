const errorHandler = async (err, req, res, next) => {
  console.log(err.name);
  switch (err.name) {
    case "GuestNameRequired":
      res.status(401).json({
        data: {
          message: "Guest name required!",
        },
      });
      break;

    case "InvalidInput":
      res.status(401).json({
        data: {
          message: "Please input the data correctly!",
        },
      });
      break;

    default:
      break;
  }
};

// export { errorHandler }
export default errorHandler;
