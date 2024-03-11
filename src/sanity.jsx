import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "t8emmum8",
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-03-05",
}
)

const data = await client.fetch(`count(*)`)
console.log(`Number of documents: ${data}`)

export default client