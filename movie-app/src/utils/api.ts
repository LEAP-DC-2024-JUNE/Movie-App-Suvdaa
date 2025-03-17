import axios from "axios";

export const getTDMBMovie = async (url) => {
  const response = await axios.get(`https://api.themoviedb.org/3${url}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTc1NGE3ZmFjNmJkMWFjM2NkZjZmM2JmN2FmODZkMiIsIm5iZiI6MTczOTkzMjc2Ny4wNjcwMDAyLCJzdWIiOiI2N2I1NDQ1ZjkwMmY1ZTIwYTY4ODkwM2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DJEms1VbQtg7UwqrExmg2UZmyvfX2IvAREKPifHmB1s",
    },
  });
  const data = response.data;
  return data;
};
