import AddTask from './../components/Addtask';
import Header from './../components/Header';
import SearchBar from './../components/SearchBar';
export default function Home() {
  return (
    <>
      <Header />
      <SearchBar />
      <AddTask />
    </>
  );
}
