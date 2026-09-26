'use strict';
/**
 * mandi.pk — Supabase config placeholder.
 * Fill url/key once the project's Supabase instance exists; js/api.js reads this
 * and falls back to MPK_MOCK when the config is empty or a request fails.
 */

const MPK_SUPABASE = {
  url: '',
  key: ''
};

function mpkSupabaseConfigured() {
  return Boolean(MPK_SUPABASE.url && MPK_SUPABASE.key);
}
