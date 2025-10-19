import { supabase } from "@/src/api/client";
import { create } from "zustand";

type AuthState = {
  user: any | null;
  loading: boolean;
  setUser: (user: any) => void;
  logout: () => Promise<void>;
  hydrate: () => Promise<void>;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  loading: true,

  setUser: (user) => set({ user }),

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },

  hydrate: async () => {
    const { data } = await supabase.auth.getSession();
    set({ user: data.session?.user ?? null, loading: false });
  },
}));
