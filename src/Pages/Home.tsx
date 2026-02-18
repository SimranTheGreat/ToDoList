import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import AddTask from './../components/Addtask';
import Header from './../components/Header';
import SearchBar from './../components/SearchBar';
import type { RootState } from '../store/store';
import { useState } from 'react';
export default function Home() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  const [isSearch, setSearch] = useState<boolean>(false);

  return (
    <>
      <Header />
      <SearchBar isSearch={isSearch} setIsSearch={setSearch} />
      {!isSearch && <TaskList tasks={tasks} />}

      <AddTask />
    </>
  );
}
