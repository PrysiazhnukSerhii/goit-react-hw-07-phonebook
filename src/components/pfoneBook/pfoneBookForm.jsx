import { BookForm, BookItem, BookButton } from './pfoneBook.styled';
import { useState } from 'react';
import { useCreateContactMutation } from '../../redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useGetContactsQuery } from '../../redux/contactsSlice';

export function PhoneBookForm() {
  const [name, setName] = useState('');
  const [pfone, setPfone] = useState('');

  const { data } = useGetContactsQuery();

  const [updatePost, { isLoading }] = useCreateContactMutation();

  const onSubmitForm = async e => {
    e.preventDefault();
    e.currentTarget.reset();

    if (data.find(e => e.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    try {
      await updatePost({
        name,
        pfone,
      });
      Notify.success(`Create new contact:"${name}"`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookForm onSubmit={onSubmitForm}>
      <BookItem>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => setName(e.target.value)}
        />
      </BookItem>
      <BookItem>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => setPfone(e.target.value)}
        />
      </BookItem>
      <BookButton type="submit" disabled={isLoading}>
        {isLoading ? 'Saves' : 'Add contact'}
      </BookButton>
    </BookForm>
  );
}
