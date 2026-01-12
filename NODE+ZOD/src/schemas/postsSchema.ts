import z from "zod";

const postsSchema = z.array(
  z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    body: z.string(),
  })
);

export default postsSchema;
