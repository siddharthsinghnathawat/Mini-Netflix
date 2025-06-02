export const Props = ({data}) => {
  const { id, title, image, genre, rating, year,description, link } = data;

  return (
    <div key={id}>
      
      <img src={image} alt={title} width="370px" height="250px" className="bordy" />
     
      <div className="card-content">
      <h2>Name: {title}</h2>
      <p>Genre: {genre}</p>
      <h3>Rating: {rating}</h3>
      <p>Release Date: {year}</p>
      <p>Description: {description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>Watch</button>
      </a>
      <br />
      </div> 
    </div>
  );
};
