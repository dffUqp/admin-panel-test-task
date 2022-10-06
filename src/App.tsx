import { useState } from 'react';
import Header from './components/Header';
import ProductsListView from './components/ProductsListView';
import DropDown from './components/UI/DropDown';
import { sorterOptions } from './helpers/const';
import ThemeWrapper from './theme/ThemeWrapper';

function App() {
  const [sort, setSort] = useState<string>('count');

  return (
    <ThemeWrapper>
      <>
        <Header />
        <DropDown options={sorterOptions} setValue={setSort} value={sort} />
        <ProductsListView sortMethod={sort} />
      </>
    </ThemeWrapper>
  );
}

export default App;
