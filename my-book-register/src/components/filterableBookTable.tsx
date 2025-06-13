import { ChangeEventHandler, useState } from 'react';
import { BookItemModel } from '../models';
import BookTable from './bookTable';
import Input from './Input';

interface Props {
  books: BookItemModel[];
  onClickDelete: (id: string) => void;
  onClickLendingSwitch: (id: string) => void;
}

const FilterableBookTable = ({
  books,
  onClickDelete,
  onClickLendingSwitch,
}: Props) => {
  const [filterText, setFilterText] = useState('');

  const handleChangeFilterText: ChangeEventHandler<HTMLInputElement> = (e) =>
    setFilterText(e.target.value);

  return (
    <div className="filterable-book-table">
      <div className="label-input">
        <label className="label">
          filter
        </label>
        {/* 作成したInputコンポーネントを使用 */}
        <Input value={filterText} onChange={handleChangeFilterText}></Input>
      </div>
      <BookTable
        bookItems={books.filter(
          (x) => !filterText || x.name.includes(filterText),
        )}
        onClickDelete={onClickDelete}
        onClickLendingSwitch={onClickLendingSwitch}
      />
    </div>
  );
};
export default FilterableBookTable;
