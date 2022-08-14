import { ListContacts } from './listContacts/listContacts';
import { PhoneBookForm } from './pfoneBook/pfoneBookForm';
import { Filter } from './filter';

export const App = () => {
  return (
    <div>
      <h1>Міняйся або здохни сука!!!</h1>

      <h1>Phonebook</h1>
      <PhoneBookForm />

      <h2>Contacts</h2>
      <Filter />
      <ListContacts />
    </div>
  );
};
