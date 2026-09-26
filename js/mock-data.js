'use strict';
/**
 * mandi.pk — dummy data (competition build per TRD §11)
 * Real Supabase queries swap in behind js/api.js later; this file stays the offline fallback.
 */

const MPK_MOCK = {
  beparis: [
    { id: 'bp-1',  name: 'Haji Abdul Razzaq',  area: 'Rahmanabad Mandi',   phone: '0300-2145587', verified: true,  rating_avg: 4.9, animals_sold: 142, animals_in_stock: 84, since: '1987' },
    { id: 'bp-2',  name: 'Seth Yousuf Baloch', area: 'Super Highway Mandi', phone: '0321-8554210', verified: true,  rating_avg: 4.8, animals_sold: 118, animals_in_stock: 67, since: '1994' },
    { id: 'bp-3',  name: 'Bhai Jan Muhammad',  area: 'Bhains Colony',       phone: '0333-6402971', verified: true,  rating_avg: 4.7, animals_sold: 96,  animals_in_stock: 52, since: '2001' },
    { id: 'bp-4',  name: 'Karim Bakhsh Qureshi', area: 'Rahmanabad Mandi', phone: '0345-7719435', verified: true,  rating_avg: 4.6, animals_sold: 74,  animals_in_stock: 45, since: '2009' },
    { id: 'bp-5',  name: 'Nazeer Ahmed Lashari', area: 'Super Highway Mandi', phone: '0312-9908173', verified: false, rating_avg: 4.4, animals_sold: 31,  animals_in_stock: 38, since: '2016' },
    { id: 'bp-6',  name: 'Gul Hassan Soomro',  area: 'Bhains Colony',       phone: '0302-4437215', verified: false, rating_avg: 4.2, animals_sold: 19,  animals_in_stock: 29, since: '2019' },
    { id: 'bp-7',  name: 'Eisa Khan Marri',    area: 'Cattle Colony Malir', phone: '0314-2075968', verified: true,  rating_avg: 4.8, animals_sold: 103, animals_in_stock: 61, since: '1999' },
    { id: 'bp-8',  name: 'Dost Muhammad Jatoi', area: 'Cattle Colony Malir', phone: '0336-1153849', verified: false, rating_avg: 4.0, animals_sold: 8,   animals_in_stock: 22, since: '2022' }
  ],

  animals: [
    { id: 'an-1',  bepari_id: 'bp-1', breed: 'Brahman',   gender: 'male',   weight_kg: 445, listed_price: 285000, status: 'available', is_calf: false, age_months: 30, tint: 'brown' },
    { id: 'an-2',  bepari_id: 'bp-2', breed: 'Cholistani', gender: 'male',  weight_kg: 480, listed_price: 320000, status: 'available', is_calf: false, age_months: 34, tint: 'sand' },
    { id: 'an-3',  bepari_id: 'bp-3', breed: 'Sahiwal',   gender: 'male',   weight_kg: 410, listed_price: 265000, status: 'available', is_calf: false, age_months: 28, tint: 'gold' },
    { id: 'an-4',  bepari_id: 'bp-7', breed: 'Brahman',   gender: 'male',   weight_kg: 520, listed_price: 385000, status: 'available', is_calf: false, age_months: 36, tint: 'dark' },
    { id: 'an-5',  bepari_id: 'bp-1', breed: 'Tharparkar', gender: 'female', weight_kg: 350, listed_price: 195000, status: 'available', is_calf: false, age_months: 40, tint: 'sand' },
    { id: 'an-6',  bepari_id: 'bp-4', breed: 'Cholistani', gender: 'male',  weight_kg: 395, listed_price: 245000, status: 'available', is_calf: false, age_months: 27, tint: 'brown' },
    { id: 'an-7',  bepari_id: 'bp-2', breed: 'Sahiwal',   gender: 'male',   weight_kg: 365, listed_price: 225000, status: 'available', is_calf: false, age_months: 25, tint: 'gold' },
    { id: 'an-8',  bepari_id: 'bp-7', breed: 'Kankrej',   gender: 'male',   weight_kg: 505, listed_price: 355000, status: 'available', is_calf: false, age_months: 33, tint: 'dark' },
    { id: 'an-9',  bepari_id: 'bp-5', breed: 'Brahman',   gender: 'female', weight_kg: 320, listed_price: 175000, status: 'available', is_calf: false, age_months: 36, tint: 'brown' },
    { id: 'an-10', bepari_id: 'bp-3', breed: 'Dajjal',    gender: 'male',   weight_kg: 430, listed_price: 295000, status: 'available', is_calf: false, age_months: 31, tint: 'sand' },
    { id: 'an-11', bepari_id: 'bp-4', breed: 'Tharparkar', gender: 'male',  weight_kg: 375, listed_price: 215000, status: 'available', is_calf: false, age_months: 26, tint: 'gold' },
    { id: 'an-12', bepari_id: 'bp-7', breed: 'Sahiwal',   gender: 'female', weight_kg: 340, listed_price: 185000, status: 'available', is_calf: false, age_months: 42, tint: 'brown' },
    { id: 'an-13', bepari_id: 'bp-1', breed: 'Kankrej',   gender: 'male',   weight_kg: 470, listed_price: 340000, status: 'available', is_calf: false, age_months: 32, tint: 'dark' },
    { id: 'an-14', bepari_id: 'bp-6', breed: 'Cholistani', gender: 'female', weight_kg: 310, listed_price: 165000, status: 'available', is_calf: false, age_months: 38, tint: 'sand' },
    { id: 'an-15', bepari_id: 'bp-2', breed: 'Brahman',   gender: 'male',   weight_kg: 460, listed_price: 310000, status: 'available', is_calf: false, age_months: 29, tint: 'gold' },
    { id: 'an-16', bepari_id: 'bp-5', breed: 'Sahiwal',   gender: 'male',   weight_kg: 335, listed_price: 205000, status: 'available', is_calf: false, age_months: 24, tint: 'brown' },
    { id: 'an-17', bepari_id: 'bp-3', breed: 'Brahman',   gender: 'male',   weight_kg: 380, listed_price: 255000, status: 'available', is_calf: false, age_months: 26, tint: 'sand' },
    { id: 'an-18', bepari_id: 'bp-4', breed: 'Kankrej',   gender: 'male',   weight_kg: 415, listed_price: 275000, status: 'available', is_calf: false, age_months: 30, tint: 'gold' },
    { id: 'an-19', bepari_id: 'bp-8', breed: 'Sahiwal',   gender: 'male',   weight_kg: 150, listed_price: 95000,  status: 'available', is_calf: true,  age_months: 9,  tint: 'sand' },
    { id: 'an-20', bepari_id: 'bp-5', breed: 'Brahman',   gender: 'female', weight_kg: 130, listed_price: 88000,  status: 'available', is_calf: true,  age_months: 8,  tint: 'brown' },
    { id: 'an-21', bepari_id: 'bp-1', breed: 'Cholistani', gender: 'male', weight_kg: 545, listed_price: 420000, status: 'available', is_calf: false, age_months: 38, tint: 'dark' },
    { id: 'an-22', bepari_id: 'bp-6', breed: 'Tharparkar', gender: 'male',  weight_kg: 355, listed_price: 220000, status: 'available', is_calf: false, age_months: 28, tint: 'gold' },
    { id: 'an-23', bepari_id: 'bp-7', breed: 'Cholistani', gender: 'male',  weight_kg: 440, listed_price: 298000, status: 'available', is_calf: false, age_months: 31, tint: 'brown' },
    { id: 'an-24', bepari_id: 'bp-2', breed: 'Dajjal',    gender: 'male',   weight_kg: 400, listed_price: 268000, status: 'available', is_calf: false, age_months: 27, tint: 'sand' }
  ],

  stats: { animals_listed: 1240, beparis_verified: 34, slots_booked: 861, avg_rating: 4.8 }
};
