import { DeleteButton } from "./Form.styled";

export const ContactListItem = ({ contact, onDeleteContact }) => (
    <li>
      <b>{contact.name}</b> - {contact.number}
      <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton>
    </li>
  );
  
  