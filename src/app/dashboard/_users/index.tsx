import TableUsers from '@/components/page/users/table_users';
import CreateUserButton from '@/components/page/users/create_user_button';

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <CreateUserButton />
      </div>
      <TableUsers/>
    </div>
  );
}
  
