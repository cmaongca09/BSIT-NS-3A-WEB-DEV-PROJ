import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'qweqwe',
	database: 'sampleusertable'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);

  // Example query
  const sql = 'SELECT * FROM your_table';
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;
    console.log('Query results:', results);

    // Close the connection
    connection.end((err) => {
      if (err) {
        console.error('Error closing MySQL connection: ' + err.stack);
        return;
      }
      console.log('MySQL connection closed.');
    });
  });
});

module.exports = {
	// other webpack configurations...
  
	resolve: {
	  fallback: {
		crypto: require.resolve('crypto-browserify'),
		stream: require.resolve('stream-browserify'),
		timers: require.resolve('timers-browserify'),
		url: require.resolve('url')
	  },
	},
  };
  
