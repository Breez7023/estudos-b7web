import z from "zod";

const schema = z.object({
  name: z.string().min(2).length(5).toUpperCase,
  email: z
    .string()
    .email()
    .transform((val) => {
      return val.split("@")[1];
    }),
  description: z.string().trim().optional(),
  age: z
    .number({
      message: "idade precisa ser um numero",
    })
    .min(18, "precisa ser maior que 18")
    .max(120),
  active: z.boolean().optional(),
  qualquer: z.any().optional(),
  nunca: z.never().optional(),
  literal: z.literal("maluco").optional(),
  url: z.string().url().optional(),
  emoji: z.string().emoji().optional(),
  id: z.string().uuid().optional(),
  regra: z
    .string()
    .regex(/[a-z]{2}/g)
    .optional(),
  Possui: z
    .string()
    .endsWith("termina com")
    .includes("tem em algum lugar")
    .startsWith("comeca com")
    .optional(),
  Ip: z.string().ipv4().optional(),
  fuel: z.enum(["gasoline", "etanol", "diesel"]).optional(),
  union: z.union([z.string(), z.number()]).optional(),
  //GT LT GTE LTE  tambem funciona nos numbers
});

type User = z.infer<typeof schema>;

let data: User = {
  name: "daniel",
  description: "         MALUCO      ",
  email: "lcranghetti@gmail.com",
  age: 19,
};

const result = schema.safeParse(data);
console.log(result);

const person = z.object({
  name: z.string(),
});
const employee = z.object({
  role: z.string(),
});
const employedPerson = z.intersection(person, employee);

const resultado = employedPerson.parse({
  name: "daniel",
  age: 19,
  role: "CEO",
});
