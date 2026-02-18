import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import AddTask from './../components/Addtask';
import Header from './../components/Header';
import SearchBar from './../components/SearchBar';
import type { RootState } from '../store/store';
export default function Home() {
  const tasks = useSelector((state: RootState) => state.task.tasks);

  return (
    <>
      <Header />
      <SearchBar />
      <TaskList tasks={tasks} />
      <AddTask />
    </>
  );
}
