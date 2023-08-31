import { z } from "zod";

const envVariables = z.object({});

envVariables.parse(process.env);
declare global {
  namespace NodeJS {
    export interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
