import mongoose from "mongoose";

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
  isConnected: 0,
};

const connect = async () => {
  if (mongoConnection.isConnected) {
    console.log("Is Connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;

    if (mongoConnection.isConnected === 1) {
      console.log("Using last connection");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect(process.env.MONGO_URL || "");
  mongoConnection.isConnected = 1;
  console.log("Conectado a Mongodb", process.env.MONGO_URL);
};

const disconnect = async () => {
  if (process.env.NODE_ENV === "development") return;

  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  console.log("Disconnected from Mongodb");
};

export { connect, disconnect };
