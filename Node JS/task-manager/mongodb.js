// const mongodb = require('mongodb');

// // Client
// const MongoClient = mongodb.MongoClient;

// // Connection URL and database name
// const connectionURL = 'mongodb://127.0.0.1:27017'; // Connection URL
// const databaseName = 'task-manager'; // Database name

// // Sample user data to insert
// const userData = {
//   name: 'Samrat',
//   age: 25,
// };

// // To set up the connection to the server
// MongoClient.connect(connectionURL, (error, client) => {
//   if (error) {
//     return console.log('Unable to connect to database:', error); // Log the error for debugging
//   }

//   console.log('Connected to database!');

//   const db = client.db(databaseName);

//   // Create the 'users' collection if it doesn't exist
//   db.createCollection('users', (createError, collection) => {
//     if (createError) {
//       console.error('Error creating collection:', createError);
//       client.close();
//     } else {
//       console.log('Collection created:', collection.collectionName);

//       // Insert the user data into the 'users' collection
//       db.collection('users').insertOne(userData, (insertError, result) => {
//         if (insertError) {
//           console.error('Error inserting document:', insertError);
//         } else {
//           console.log('Inserted document:', result.ops);
//         }

//         // Close the connection when done
//         client.close();
//       });
//     }
//   });
// });
