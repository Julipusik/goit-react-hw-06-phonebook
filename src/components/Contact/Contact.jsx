import { useDispatch } from "react-redux";
import { removeContact } from "redux/contactsSlice";
import { ContactItem, DeleteBtn } from "./Contact.styled"

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    return (
        <ContactItem>
            <p>
                {contact.name}: {contact.number}
            </p>
            <DeleteBtn
                onClick={evt => dispatch(removeContact(evt.target.id))}
                id={contact.id}
            >
                Delete
            </DeleteBtn>
        </ContactItem>
    )
}