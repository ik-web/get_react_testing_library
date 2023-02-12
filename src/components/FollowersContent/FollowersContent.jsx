import './FollowersContent.css';
import { CustomTitle, FollowersList } from 'components';

export const FollowersContent = () => {
  return (
    <div className="followers">
      <CustomTitle title="Followers" />
      <FollowersList />
    </div>
  );
};
