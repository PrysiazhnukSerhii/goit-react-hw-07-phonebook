import { ContactItem } from '../contactsItem/contactsItem';

import { useGetContactsQuery } from '../../redux/contactsSlice';

export function ListContacts() {
  const { data } = useGetContactsQuery();

  if (!data) {
    return;
  }

  return (
    <>
      <ul>
        {data.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
}
