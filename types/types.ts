import { z } from "zod";

const envVariables = z.object({
  NEXT_PUBLIC_API_URL: z.string().min(1),
});

envVariables.parse(process.env);
declare global {
  namespace NodeJS {
    export interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
