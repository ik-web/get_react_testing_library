import './Follower.css';

export const Follower = ({ follower }) => {
  return (
    <div className="follower">
      <img
        src={follower.picture.large}
        alt="Follower avatar"
        className='follower__img'
      />

      <div className="follower__details">
        <div className="follower__name">
          <h4>{follower.name.first} {follower.name.last}</h4>
        </div>

        <p className="follower__location">Country: {follower.location.country}</p>
        <p className="follower__location">City: {follower.location.city}</p>
      </div>
    </div>
  );
};
