const eventRoutes = require('./event_routes')
const pageRoutes = require('./page_routes')

module.exports = function (app, db) {
  // noteRoutes(app, db);
  // Other route groups could go here, in the future
  pageRoutes(app, db)
  eventRoutes(app, db)
}
