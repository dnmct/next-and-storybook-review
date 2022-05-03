import { GetServerSideProps } from "next";
import { Todo } from "../../types/todos";

interface Props {
  todo: Todo;
}

export default function TodoPage({ todo }: Props) {
  return (
    <div>
      <span>{todo.title}</span>
      <span>{todo.completed ? "Completed" : "Not Completed"}</span>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { todoId } = query;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo = await response.json();

  return {
    props: {
      todo,
    },
  };
};
