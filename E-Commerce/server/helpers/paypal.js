const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AcRiXmpnYLOnUPGDdZVja8hopzh1OsMzgJNxoKO3JHjkrB66J8JURtEg13lG7C2KU_6iDY9M5S-JadZx",
  client_secret: "ENJ-uFTs1uEjC-Teljk8GzCUE7YoQ-ChRl_cLKKbuSYXPiQk16ovGEbroj6WRTbFVkZYI7pLY585g3tx",
});

module.exports = paypal;
