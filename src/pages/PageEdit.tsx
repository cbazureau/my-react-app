import { Fragment, useContext, useState } from 'react';
import { Params, useLoaderData, useNavigate } from 'react-router-dom';
import TodoContext from '../context/TodoContext';
import TodoBottomBar from './components/TodoBottomBar';

export function loader({ params }: { params: Params<string> }): {
  todoId: number;
} {
  if ('todoId' in params) {
    return { todoId: parseInt(params.todoId || '', 10) };
  }
  return { todoId: 0 };
}

const PageEdit = () => {
  const [value, setValue] = useState('');
  const { addTodo } = useContext(TodoContext);
  const data = useLoaderData() as ReturnType<typeof loader>;
  const navigate = useNavigate();
  return (
    <Fragment>
      <p>{data?.todoId}</p>
      <input type="text" onChange={e => setValue(e.target.value)} />
      <button
        onClick={() => {
          addTodo({ id: Math.random(), text: value, isDone: false });
          navigate('/');
        }}
      >
        Add
      </button>
      <TodoBottomBar />
    </Fragment>
  );
};

export default PageEdit;
