import supabaseClient from "@/utils/supabase";

// Fetch Jobs
export async function getJobs(token, { location, company_id, searchQuery }) {
  // Initialize Supabase client with token from Clerk
  const supabase = await supabaseClient(token); 
  
  // Start the query on the 'jobs' table, including related 'company' fields
  let query = supabase
    .from("jobs")
    .select("*, company: companies(name, logo_url)");

  // Apply filters based on location, company_id, and searchQuery
  if (location) {
    query = query.eq("location", location); // Filter by location
  }

  if (company_id) {
    query = query.eq("company_id", company_id); // Filter by company_id
  }

  if (searchQuery) {
    query = query.ilike("title", `%${searchQuery}%`); // Search for jobs by title
  }

  // Fetch the data and handle errors
  const { data, error } = await query;

  if (error) {
    console.error("Error fetching Jobs:", error); // Log error if query fails
    return null;
  }

  return data; // Return the fetched job data
}
