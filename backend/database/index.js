const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://mern_user:l2eX4d3afz2mmLNT@calendardb.vdrr8ap.mongodb.net/mern_palacio";

const dbConnection = async() => {

  try {

      await mongoose.connect( MONGO_URL );

      console.log("DB Online");
      
  } catch (error) {
      console.log(error);
      throw new Error('Error a la hora de inicializar DB');
  }
}

module.exports = {
  dbConnection
}