import { RedisClientType, SchemaFieldTypes, createClient } from "redis";

class Redis {
  private client: ReturnType<typeof createClient>;
  constructor() {
    const client = createClient({ url: "redis://redis:6379" });
    client.on("error", (err) => console.log("Redis Client Error", err));
    this.client = client;
    (async () => {
      await client.connect();
    })();
  }
  async createCart(sessionId: string) {
    await this.client.json.set(sessionId, "$", {
      cart: [],
    });
  }
  async getAllCart(sessionId: string) {
    const data = await this.client.json.get(sessionId);
    return data;
  }

  async addToCart(sessionId: string, cart: any) {
    await this.client.json.arrAppend(sessionId, "cart", cart);
  }
}

export default Redis;
