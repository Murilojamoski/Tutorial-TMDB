import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTMzMDY5YzExOGRmOGJiNGU4NzE4OTBmZTVlMzgyMiIsIm5iZiI6MTc1OTIzMTAyMy44NCwic3ViIjoiNjhkYmJjMmZmOGZjNTRhYzZlNTMxYjkxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.AkpLGYDouNPmhKScEy8n_Bq2YZAydUyXZ8oEqtmV3hE`,
  },
});

export default api;