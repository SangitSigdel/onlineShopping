const app = require('./index')

const server = app.listen(3000, () => {
  console.log(`Server is running in the port 3000`)
})