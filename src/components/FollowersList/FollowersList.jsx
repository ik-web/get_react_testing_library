import React from 'react';
import { Link } from 'react-router-dom';

import './FollowersList.css';
import { useFetch } from 'hook/useFetch';
import { ErrorMessage, Follower, Loader } from 'components';

const fetchParams = {
  initialData: [],
  url: 'https://randomuser.me/api/?results=5',
  options: null
}

export const FollowersList = () => {
  const {
    data: followers,
    loading,
    error
  } = useFetch(fetchParams);

  return (
    <div className="followersList">
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {followers.length > 0 &&
        <ul>
          {followers.map((follower) => (
            <li key={follower.email}>
              <Follower follower={follower} />
            </li>
          ))}
        </ul>
      }

      <div className="followersList__footer">
        <Link to="/" className="pageLink">
          <span className="followersList__footerArrow">&#171;</span> Go Back
        </Link>
      </div>
    </div>
  );
};
