import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('{mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]}', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('sos-school');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;