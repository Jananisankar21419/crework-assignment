// services/supabaseclient.mjs
import { createClient } from "@supabase/supabase-js";

// Replace with your actual Supabase URL and public API key
const SUPABASE_URL = "https://uzmbevhhtbopnawhrhcr.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6bWJldmhodGJvcG5hd2hyaGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzMTM0NjMsImV4cCI6MjAzNzg4OTQ2M30.xFmPkoY3kAhjNkshJuIRVSfdymL0QAP6Xgqv3xhK-oc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
