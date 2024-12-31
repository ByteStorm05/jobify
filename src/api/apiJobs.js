import supabaseClient from "@/utils/supabase";

// Fetch Jobs
export async function getJobs(token, { location, company_id, searchQuery }) {
  // Initialize Supabase client with token from Clerk
  const supabase = await supabaseClient(token); 
  
  // Start the query on the 'jobs' table, including related 'company' fields
  let query = supabase
    .from("jobs")
    .select("*, company: companies(name, logo_url), saved: saved_jobs(id)");

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





export async function getSavedJobs(token) {
  const supabase = await supabaseClient(token);
  const query = await supabase
    .from("saved_jobs")
    .select("*, job: jobs(*, company: companies(name,logo_url))");

    const { data, error } = query;

  if (error) {
    console.error("Error fetching Saved Jobs:", error);
    return null;
  }

  return data;
}

// Read single job
export async function getSingleJob(token, { job_id }) {
  const supabase = await supabaseClient(token);
  let query = supabase
    .from("jobs")
    .select(
      "*, company: companies(name,logo_url), applications: applications(*)"
    )
    .eq("id", job_id)
    .single();

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching Job:", error);
    return null;
  } 

  return data;
}

// Created updating hiring status hook

export async function updateHiringStatus(token, { job_id }, isOpen) {
  const supabase = await supabaseClient(token);
  const { data, error } = await supabase
    .from("jobs")
    .update({ isOpen })
    .eq("id", job_id)
    .select();

  if (error) {
    console.error("Error Updating Hiring Status:", error);
    return null;
  }

  return data;
}



// - Add / Remove Saved Job
export async function saveJob(token, { alreadySaved }, saveData) {
  const supabase = await supabaseClient(token);

  if (alreadySaved) {
    // If the job is already saved, remove it
    const { data, error: deleteError } = await supabase
      .from("saved_jobs")
      .delete()
      .eq("job_id", saveData.job_id);

    if (deleteError) {
      console.error("Error removing saved job:", deleteError);
      return data;
    }

    return data;
  } else {
    // If the job is not saved, add it to saved jobs
    const { data, error: insertError } = await supabase
      .from("saved_jobs")
      .insert([saveData])
      .select();

    if (insertError) {
      console.error("Error saving job:", insertError);
      return data;
    }

    return data;
  }
}



export async function deleteJob(token, { job_id }) {
  const supabase = await supabaseClient(token);

  const { data, error: deleteError } = await supabase
    .from("jobs")
    .delete()
    .eq("id", job_id)
    .select();

  if (deleteError) {
    console.error("Error deleting job:", deleteError);
    return data;
  }

  return data;
}
