import PropTypes from 'prop-types';

import css from './ContactList.module.css';

export const ContactList = ({ contact, deleteBtn }) => {
  return (
    <ul className={css.contact__list}>
      {contact.map(({ id, name, number }) => (
        <li key={id} className={css.contact__item}>
          <p className={css.contact__name}>
            {name} : {number}
          </p>
          <button
            type="button"
            className={css.contact__btn}
            onClick={() => deleteBtn(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteBtn: PropTypes.func.isRequired,
};
