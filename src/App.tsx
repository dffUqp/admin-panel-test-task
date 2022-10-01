import { useState } from 'react';
import Header from './components/Header';
import ProductsListView from './components/ProductsListView';
import DropDown from './components/UI/DropDown';
import { sorterOptions } from './helpers/const';

function App() {
  const [sort, setSort] = useState<string>('count');

  return (
    <>
      <Header />
      <DropDown options={sorterOptions} setValue={setSort} value={sort} />
      <ProductsListView sortMethod={sort} />
    </>
  );
}

export default App;
