import { Link } from 'react-router-dom';

const TodoBottomBar = () => {
  return (
    <div className="TodoBottomBar">
      <Link to={`todo/create`}>Add</Link>
    </div>
  );
};

export default TodoBottomBar;
