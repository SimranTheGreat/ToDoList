import { useSelector } from 'react-redux';
import type { RootState } from './../store/store';
import { useEffect } from 'react';
import TaskListCatagories from './TaskListCatagories';

export default function TaskList() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  console.log('task', tasks);

  const pending = tasks.filter((tasks) => tasks.status === 'Pending');
  const completed = tasks.filter((tasks) => tasks.status === 'Completed');
  const inProgress = tasks.filter((tasks) => tasks.status === 'In Progress');

  return (
    <>
      <TaskListCatagories header="In Progress" task={inProgress} />
      <TaskListCatagories header="Pending" task={pending} />
      <TaskListCatagories header="Completed" task={completed} />
    </>
  );
}
