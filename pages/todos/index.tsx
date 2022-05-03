import { GetServerSideProps } from "next";
import Link from "next/link";
import { Todo } from "../../types/todos";

interface Props {
  todos: Todo[];
}

export default function Todos({ todos }: Props) {
  return (
    <div>
      <span>Todos</span>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>
              <span>
                {todo.title} - {todo.completed.toString()}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  return {
    props: {
      todos,
    },
  };
};
