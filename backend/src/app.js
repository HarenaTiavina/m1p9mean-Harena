const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(require('./config/cors'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", express.static("./public/web"));

// Routes
app.use("/api/role", require("./routes/roleRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/restaurantType", require("./routes/restaurantTypeRoutes"));
app.use("/api/restaurant", require("./routes/restaurantRoutes"));
app.use("/api/productType", require("./routes/productTypeRoutes"));
app.use("/api/product", require("./routes/productRoutes"));
app.use("/api/paymentMethod", require("./routes/paymentMethodRoutes"));
app.use("/api/level", require("./routes/levelRoutes"));
app.use("/api/client", require("./routes/clientRoutes"));
app.use("/api/order", require("./routes/orderRoutes"));

// Initialize database connection
require("./config/database");

module.exports = app;