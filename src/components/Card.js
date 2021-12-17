import "../styles/Card.css";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(https://drive.google.com/uc?id=${data.img})`,
        }}
      ></div>
      <div className="card-title"> {data.title} </div>
      <div className="card-info">
        <span> Episodes: {data.episodes} </span>
      </div>
    </div>
  );
};

export default Card;
