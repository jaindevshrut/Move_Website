import './App.css'
// we are unable to return mutiple elements in react so we use Fragment (<> </>) to wrap all the elements
// function Learn() {
//   return (
//     <>
//     < Text text="Variable"/>
//     <Text></Text>
//       <h1>Hello World</h1>
//     </>
//   )
// }

// function Text({ text = "Default" }) {
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   );
// }


import MovieCard from './components/MovieCard';
function Learn() {
  // if we want conditional rendering we can use ternary operator
  const movieNumber = 1;
  // if (movieNumber === 1) {
  //   return (
  //   )
  // }
  return (
    <>
    {/* method 1 */}
      {movieNumber === 1 ? 
      (<MovieCard movie={{ title: "My Fav movie", release_date: '2022-01-01' }} /> 
      ) : (
      <MovieCard movie={{ title: "My movie", release_date: '2022-01-01' }} />
      )}
    {/* method 2 */}
      {movieNumber === 1 && <MovieCard movie={{ title: "My movie", release_date: '2022-01-01' }} />}
      
    </>
  )
}

export default Learn
