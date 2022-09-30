import { useState } from 'react';
import Header from './components/Header';
import ProductsListView from './components/ProductsListView';
import DropDowm from './components/UI/DropDowm';
import { sorterOption } from './helpers/const';

function App() {
  const [sort, setSort] = useState<string>('count');

  return (
    <>
      <Header />
      <DropDowm option={sorterOption} setValue={setSort} value={sort} />
      <ProductsListView sortMethod={sort} />
    </>
  );
}

export default App;
