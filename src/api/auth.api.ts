import { supabase } from "./client";

export async function loginService(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  const { session, user } = data;

  return {
    token: session?.access_token ?? "",
    user: {
      id: user.id,
      email: user.email ?? "",
      name: user.user_metadata?.full_name ?? "Usuario",
    },
  };
}

// o3c1gcs2DAn3yBZ9
