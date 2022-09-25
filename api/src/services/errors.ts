
const dbRequestHandler = (error: any) => {
    console.log(JSON.stringify(error));
    throw error;
  };


  const errorHandler = {
    dbRequest: dbRequestHandler
  }

  export default errorHandler;
