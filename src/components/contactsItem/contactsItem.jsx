import { useDeletContactMutation } from '../../redux/contactsSlice';
import { DeleteButton } from './contactsItem.styled';

export function ContactItem({ contact }) {
  const { id, name, pfone } = contact;

  const [updatePost, { isLoading }] = useDeletContactMutation();

  return (
    <li>
      {name}: {pfone};
      <DeleteButton
        onClick={() => {
          updatePost(id);
        }}
      >
        {isLoading ? 'удаляе' : 'Delete'}
      </DeleteButton>
    </li>
  );
}
