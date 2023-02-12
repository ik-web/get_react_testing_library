import { Link } from 'react-router-dom';

import './TodoFooter.css';
import { calcIncompletedTasksNumber } from './utils';

export const TodoFooter = ({ todos }) => {
  const IncompleteTasksNumber = calcIncompletedTasksNumber(todos);

  return (
    <div className="todoFooter">
      <p>
        {IncompleteTasksNumber} {IncompleteTasksNumber === 1 ? 'task' : 'tasks'} left
      </p>

      <Link to="/followers" className='pageLink'>
        Followers
      </Link>
    </div>
  );
};
