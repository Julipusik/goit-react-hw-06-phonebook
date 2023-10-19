import { Contact } from "components/Contact/Contact";
import { useSelector } from "react-redux";
import { getFilter } from "redux/filterSlice";
import { getContacts } from "redux/contactsSlice";

export const ContactList = () => {
    const filter = useSelector(getFilter);
    const contacts = useSelector(getContacts);

    const filteredContacts = () => {
        if (!filter) {
            return contacts;
        }
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    return (
        <div>
            {filteredContacts().map(contact => {
                return <Contact
                    key={contact.id}
                    contact={contact} />
            }
            )}
        </div>
    );
};