function user(req, res) {
  res.status(200).json({
    status: true,
    payload: {
      fname: "Peter",
      lname: "Parker"
    }
  });
}

export { user };
