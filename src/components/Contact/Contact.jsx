import css from './Contact.module.css';
import { FaUserLarge, FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {  deleteContact } from "../../redux/contactsSlice";


export default function Contact({ contact }) {

    const dispatch = useDispatch();

    function onDelete() {
        dispatch(deleteContact(contact.id));
    }

    return (
        <div className={css.container}>
            <div className={css.containerInfo}>
                <p><FaUserLarge className={ css.iconPhone} />{contact.name}</p>
                <p><FaPhone className={ css.iconPersone}/>{contact.number}</p>
            </div>
            <button className={css.deleteButton} onClick={onDelete} >Delete</button>
        </div>
    )
}