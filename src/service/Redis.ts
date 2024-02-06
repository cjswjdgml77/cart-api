import { RedisClientType, createClient } from "redis";

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
  async set() {
    await this.client.set("hel", "hello");
  }
  async get() {
    const data = await this.client.get("hel");
    console.log(data, "data");
    return data;
  }
}

export default Redis;
