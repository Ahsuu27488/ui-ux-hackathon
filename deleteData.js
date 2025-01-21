import dotenv from 'dotenv'; // Import dotenv for environment variables
import { createClient } from '@sanity/client'; // Import Sanity client

// Load environment variables from .env or .env.local
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Your Sanity dataset
  apiVersion: '2023-01-01', // API version (use the latest or as needed)
  useCdn: false, // Disable CDN for write operations
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // Your API token
});

async function deleteAllDocuments(schemaType) {
  try {
    console.log(`Fetching all documents of type "${schemaType}"...`);
    const query = `*[_type == "${schemaType}"]`; // Query for documents of the specified type
    const documents = await client.fetch(query);

    if (documents.length === 0) {
      console.log(`No documents found of type "${schemaType}".`);
      return;
    }

    console.log(`Found ${documents.length} documents. Deleting...`);

    for (const doc of documents) {
      await client.delete(doc._id); // Delete document by ID
      console.log(`Deleted document with ID: ${doc._id}`);
    }

    console.log(`All documents of type "${schemaType}" have been deleted.`);
  } catch (error) {
    console.error('Error deleting documents:', error);
  }
}

// Call the function with the schema type you want to delete
deleteAllDocuments('product'); // Replace 'product' with your schema type
