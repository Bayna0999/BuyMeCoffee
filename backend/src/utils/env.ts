import { configDotenv } from "dotenv";

configDotenv();

const secret_key: string | undefined | Buffer<ArrayBufferLike> =
  process.env.SECRET_KEY;

export { secret_key };
