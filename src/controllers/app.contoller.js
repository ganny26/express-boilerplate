function handleResponse(req, res, next) {
  let { statusCode, payload } = req.myobj;
  res.status(statusCode).send(payload);
}

function check(req, res, next) {
  try {
    req.myobj = {
      statusCode: 200,
      payload: {
        status: true,
        payload: "hello from check"
      }
    };
    next();
  } catch (error) {
    req.myobj = {
      statusCode: 500,
      payload: {
        status: false,
        payload: "Internal Server Error"
      }
    };
    next();
  }
}

function sample(req, res, next) {
  req.myobj = {
    statusCode: 200,
    payload: {
      status: true,
      payload: "hello from sample"
    }
  };
  next();
}

export { handleResponse, check, sample };
