import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <ul className={css.itemList}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item}>
            <ContactItem
                key={id}
                id={id}
                name={name}
                number={number}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;