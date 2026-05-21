import {
  MongoClient,
  ServerApiVersion,
  type Db,
  type Document,
} from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "ejajul_portfolio";

type GlobalWithMongo = typeof globalThis & {
  _portfolioMongoClient?: Promise<MongoClient>;
};

export function isMongoConfigured() {
  return Boolean(uri);
}

export async function getMongoClient() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  const globalForMongo = globalThis as GlobalWithMongo;

  if (!globalForMongo._portfolioMongoClient) {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
      },
    });

    globalForMongo._portfolioMongoClient = client.connect();
  }

  return globalForMongo._portfolioMongoClient;
}

export async function getDb(): Promise<Db> {
  const client = await getMongoClient();
  return client.db(dbName);
}

export async function getCollection<T extends Document>(name: string) {
  const db = await getDb();
  return db.collection<T>(name);
}
