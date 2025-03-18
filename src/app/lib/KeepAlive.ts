const keepAlive = async () => {
    try {
      await fetch('/api/keepAlive');
      console.log("Keep-alive request sent!");
    } catch (error) {
      console.error("Error sending keep-alive request:", error);
    }
  };
  
  // Run every 5 minutes
  setInterval(keepAlive, 5 * 60 * 1000);
  
  export default keepAlive;
  