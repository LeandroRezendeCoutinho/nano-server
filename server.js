const nanoexpress = require('nanoexpress');

const app = nanoexpress();

app.get('/', async(req, res) => {
  return res.send({ status: 'ok' });
});

app.listen(3000);