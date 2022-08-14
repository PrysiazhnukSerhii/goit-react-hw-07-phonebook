import { ListContacts } from '../listContacts/listContacts';
import { PhoneBookForm } from '../pfoneBook/pfoneBookForm';
import { Container, TitleContacts, TitlePhonebook } from './app.styled';

export const App = () => {
  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <PhoneBookForm />

      <TitleContacts>Contacts</TitleContacts>
      <ListContacts />
    </Container>
  );
};
