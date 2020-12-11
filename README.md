# currencies-rate

GET /api/currencies - first 5 records in db.

GET /api/currencies?page=1&limit=5  - is similar to GET /api/currencies. Page and limit parameters are used for pagination.

GET /api/currencies?name=Куна -The parameter name is used for searching by the txt name of the currency.

GET /api/currencies/:id - example GET /api/currencies/HUF is for getting currency records by its code.

npm run start - is for starting the server.
npm run updateData - is for updating data in the MongoDb.
