import { useGetContactsQuery } from '../../redux/contactsSlice';
import { useState } from 'react';
import { ContactItem } from '../contactsItem/contactsItem';
import { Filter } from '../filter';

export function ListContacts() {
  const [serchName, setSerchName] = useState('');
  // const [contacts, setContacts] = useState('');
  const { data } = useGetContactsQuery();

  if (!data) {
    return;
  }
  let contacts = data;

  if (serchName.length > 0) {
    contacts = data.filter(information =>
      information.name.toLowerCase().includes(serchName.toLowerCase())
    );
  }

  return (
    <>
      <Filter serchName={setSerchName} />
      <ul>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}
