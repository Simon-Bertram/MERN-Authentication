const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    // 404 is the not found error
    res.status(404);
    // pass error to next middleware
    next(error);
};

const errorHandler = (err, req, res, next) => {
    // set status code to 500 if status code is 200
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
    // check if error is a CastError and if the 
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
      // set status code to 404
      statusCode = 404;
      message = 'Resource not found';
    }
    res.status(statusCode);
    res.json({
        message,
        // show stack trace if in development mode
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

export { notFound, errorHandler };