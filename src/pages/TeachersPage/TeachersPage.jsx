import DocumentTitle from "../../components/DocumentTitle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./TeachersPage.module.css";
import { useState } from "react";
import Filters from "../../components/Filters/Filters";
import Teachers from "../../components/Teachers/Teachers";
import { selectTeachersItems } from "../../redux/teachers/selectors";
import { fetchTeachers } from "../../redux/teachers/operations";

const TeachersPage = ({}) => {
  const dispatch = useDispatch();
  /*const isLoading = useSelector()*/
  const teachers = useSelector(selectTeachersItems);
  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <div>
      <Filters />
      <Teachers teachers={teachers} />
    </div>
  );
};

export default TeachersPage;
/* const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <DocumentTitle>Contacts</DocumentTitle>
      <ContactForm></ContactForm>
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </div>
  );
};

export default ContactsPage;*/
