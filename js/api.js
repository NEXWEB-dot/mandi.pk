'use strict';
/**
 * mandi.pk — data layer.
 * Reads Supabase REST when configured (js/supabase.js), falls back to MPK_MOCK otherwise.
 * Response shape matches the TRD data model so the swap is drop-in.
 */

const MPK = {
  api: {
    async _supabaseSelect(table, query) {
      if (!mpkSupabaseConfigured()) return null;
      try {
        const url = `${MPK_SUPABASE.url}/rest/v1/${table}${query || ''}`;
        const res = await fetch(url, {
          headers: { 'apikey': MPK_SUPABASE.key, 'Authorization': `Bearer ${MPK_SUPABASE.key}` }
        });
        if (!res.ok) throw new Error(`Supabase error (${res.status})`);
        return await res.json();
      } catch (err) {
        console.warn(`[MPK] ${table} fetch failed, using mock data:`, err.message);
        return null;
      }
    },

    _mockBepari(id) {
      return MPK_MOCK.beparis.find((b) => b.id === id) || null;
    },

    async getBeparis() {
      const rows = await this._supabaseSelect('beparis', '?select=*&order=rating_avg.desc');
      return rows || MPK_MOCK.beparis;
    },

    async getFeaturedAnimals(limit) {
      const cap = limit || 12;
      const rows = await this._supabaseSelect('animals', `?select=*&status=eq.available&order=listed_price.desc&limit=${cap}`);
      if (rows) return rows;
      return MPK_MOCK.animals
        .filter((a) => a.status === 'available')
        .sort((a, b) => b.listed_price - a.listed_price)
        .slice(0, cap);
    },

    async getStats() {
      return MPK_MOCK.stats;
    },

    async getAnimalById(id) {
      if (!id) return MPK_MOCK.animals[0];
      const found = MPK_MOCK.animals.find((a) => a.id === id);
      if (found) {
        const bepari = this._mockBepari(found.bepari_id);
        return { ...found, bepari };
      }
      return MPK_MOCK.animals[0];
    },

    async getBepariById(id) {
      if (!id) return MPK_MOCK.beparis[0];
      const bepari = MPK_MOCK.beparis.find((b) => b.id === id);
      return bepari || MPK_MOCK.beparis[0];
    },

    async getAnimalsByBepari(bepariId) {
      if (!bepariId) return [];
      return MPK_MOCK.animals.filter((a) => a.bepari_id === bepariId);
    }
  }
};
