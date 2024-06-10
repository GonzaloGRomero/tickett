"use client";
import React from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login() {
  
      
    
  
  const supabase = createClient(
    "https://opbfkzsjtdhkjjaxxhlv.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wYmZrenNqdGRoa2pqYXh4aGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0NTQ4OTcsImV4cCI6MjAzMzAzMDg5N30.1n54kqs7Dvhya6FplbSWgEK_bHJr13PunWIO57cQ_Aw"
  );
  return(  <Auth
    supabaseClient={supabase}
    theme="default"
    appearance={{ theme: ThemeSupa }}
    providers={['google']}
  />);
}
