import { useDeletContactMutation } from '../../redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Oval } from 'react-loader-spinner';
import {
  DeleteButton,
  ItemContact,
  ContactParagraph,
} from './contactsItem.styled';
import { MdContactPhone } from 'react-icons/md';

export function ContactItem({ contact }) {
  const { id, name, pfone } = contact;

  const [updatePost, { isLoading }] = useDeletContactMutation();

  return (
    <ItemContact>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <MdContactPhone />
        <ContactParagraph>
          <span> {name}:</span> {pfone};
        </ContactParagraph>
      </div>

      <DeleteButton
        onClick={async () => {
          await updatePost(id);
          Notify.failure(`Deleted contact: ${name}`);
        }}
        disabled={isLoading}
      >
        {isLoading ? <Oval color="#00BFFF" height={10} width={10} /> : 'Delete'}
      </DeleteButton>
    </ItemContact>
  );
}
