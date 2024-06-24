import TableUsers from '@/components/page/users/table_users';
import CreateUserButton from '@/components/page/users/create_user_button';
import SearchTable from '@/components/page/users/search_table';
import { useState } from 'react';

export default function UsersPage() {
  const [searchField, setSearchField] = useState('name')

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <SearchTable searchField={searchField} setSearchField={setSearchField}/>
        <CreateUserButton />
      </div>
      <TableUsers searchField={searchField} />
    </div>
  );
}
  
