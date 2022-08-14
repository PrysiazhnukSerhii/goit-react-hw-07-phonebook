
import { ContactItem } from '../contactsItem/contactsItem';

import {
  useGetContactsQuery,
  useDeletContactMutation,
} from '../../redux/contactsSlice';

export function ListContacts() {
  const { data } = useGetContactsQuery();
  const [updatePost, { isLoading }] = useDeletContactMutation();

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
