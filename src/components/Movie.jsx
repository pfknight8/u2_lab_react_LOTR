const Movie = (props) => {

  return (
    <div id={props.id} className="movieDiv">
      <h1>Lord of the Rings: {props.title}</h1>
      <img src={props.poster} alt="Movie Poster" />
      <p>Runtime: {props.hours} hours and {props.minutes} minutes.</p>
    </div>
  )
}

export default Movie