const dbRequestHandler = (error: any) => {
  console.log('dbRequestHandler(error)');
  console.log(error);
  throw error;
};

const errorHandler = {
  dbRequest: dbRequestHandler,
};

export default errorHandler;
