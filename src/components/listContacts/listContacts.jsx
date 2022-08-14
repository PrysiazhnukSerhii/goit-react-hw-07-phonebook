import { useGetContactsQuery } from '../../redux/contactsSlice';
import { useState } from 'react';
import { ListItemContacts } from './listContacts.styled';

import { ContactItem } from '../contactsItem/contactsItem';
import { Filter } from '../filter/filter';

export function ListContacts() {
  const [serchName, setSerchName] = useState('');
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
      <ListItemContacts>
        {contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ListItemContacts>
    </>
  );
}
