// Anything in page.tsx is a route

import { BlockRenderer } from "@/components/BlockRenderer";
import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

// Get data from Strapi
async function loader() {
  const data = await getHomePage();
  if(!data) notFound();
  console.log(data);
  return { ...data.data };
}

// Consume data from Strapi
export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  console.log(data);
  return <BlockRenderer blocks={blocks} />
}
