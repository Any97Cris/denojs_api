import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? 8080;