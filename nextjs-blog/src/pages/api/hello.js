// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function hello(req, res) {
  console.info(req);
  await new Promise((resolve) => setTimeout(() => resolve("Fulfilled"), 300));
  return res
    .status(201)
    .json({ "API Routes say": `Hello ${req.rawHeaders[1]}` });
}
