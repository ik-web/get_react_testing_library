import React from 'react';
import { Link } from 'react-router-dom';

import './FollowersList.css';
import { fetchFollowers } from './utils';
import { Follower, Loader } from 'components';

export const FollowersList = () => {
  const [followers, setFollowers] = React.useState([]);

  React.useEffect(() => {
    fetchFollowers(setFollowers);
  }, []);

  return (
    <div className="followersList">
      {!!followers.length
        ? <ul>
            {followers.map((follower) => (
              <li key={follower.email}>
                <Follower follower={follower} />
              </li>
            ))}
          </ul>
        : <Loader />
      }

      <div className="followersList__footer">
        <Link to="/" className="pageLink">
          <span className="followersList__footerArrow">&#171;</span> Go Back
        </Link>
      </div>
    </div>
  );
};
