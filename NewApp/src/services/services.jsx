// GET https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY
// Solicitud de ejemplo
// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=a7d99dbd29ff4c4b96d9060534b23be1';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

export const GetNewsFetch = async () => {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=a7d99dbd29ff4c4b96d9060534b23be1`
  );
  const jsonData = await data.json();
  Search();
  return jsonData;
};

// GET https://newsapi.org/v2/everything?q=Apple&from=2023-07-27&sortBy=popularity&apiKey=API_KEY
// Example request
// var url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2023-07-27&' +
//           'sortBy=popularity&' +
//           'apiKey=a7d99dbd29ff4c4b96d9060534b23be1';

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

export const Search = async (search, date, orden) => {
  const data = await fetch(
    `https://newsapi.org/v2/everything?${search}&${date}&${orden}&apiKey=a7d99dbd29ff4c4b96d9060534b23be1`
  );
  const jsonData = await data.json();
  console.log(jsonData);
  return jsonData;
};
