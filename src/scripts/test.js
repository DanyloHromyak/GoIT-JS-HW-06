// const players = [
//   {
//     id: "1",
//     name: "Mango",
//     isOnline: false,
//     hoursPlayed: 1,
//   },
//   {
//     id: "2",
//     name: "Poly",
//     isOnline: true,
//     hoursPlayed: 3,
//   },
//   {
//     id: "3",
//     name: "Ajax",
//     isOnline: false,
//     hoursPlayed: 10,
//   },
//   {
//     id: "4",
//     name: "Chelsey",
//     isOnline: true,
//     hoursPlayed: 4,
//   },
// ];

// players.forEach((player) => {
//   console.log(
//     `Гравець ${player.name} ${player.isOnline ? "Онлайн" : "Офлайн"}`
//   );
// });

// const copy = players.map(({isOnline, ...otherPlayedData}) => ({
//   ...otherPlayedData,
//   isOnline: true,
// }))
// copy.map(player => player.isOnline = true)
// console.log(copy, players)

// const numbers = [3, 9, 1, 1488, 420];
// let total = 0;

// for (number of numbers) {
//   total += number;
// }

// const sum = numbers.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   0
// );

// console.log(sum);

const movies = [
  {
    id: '1',
    title: 'Movie 1',
    genre: 'Action',
  },
  {
    id: '2',
    title: 'Movie 2',
    genre: 'Adventure',
  },
  {
    id: '3',
    title: 'Movie 3',
    genre: 'Action',
  },
  {
    id: '4',
    title: 'Movie 4',
    genre: 'Comedy',
  },
  {
    id: '5',
    title: 'Movie 5',
    genre: 'Adventure',
  },
  {
    id: '6',
    title: 'Movie 6',
    genre: 'Adventure',
  },
];

const categorizedMovies = movies.reduce((prev, movie) => {
  const { genre } = movie; // const genre = movie.genre

  if (!prev.hasOwnProperty(genre)) {
    prev[genre] = [];
  }

  prev[genre].push(movie);

  return prev;
}, {

})

