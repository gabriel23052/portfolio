import { portfolioData } from "../../portfolioData";

import SocialLinks from "../SocialLinks";

import classes from "./Contacts.module.css";

type TContact = {
  label: string;
  link: string;
  readableFormat: string;
};

const CONTACTS: TContact[] = [
  {
    label: "Email",
    link: portfolioData.socialLinks.email.url,
    readableFormat: portfolioData.socialLinks.email.readableFormat,
  },
  {
    label: "Telefone / WhatsApp",
    link: portfolioData.socialLinks.whatsapp.url,
    readableFormat: portfolioData.socialLinks.whatsapp.readableFormat,
  },
];

/**
 * Seção de contatos contendo email e telefone, além
 * dos links externos também presentes na introdução
 */
const Contacts = () => {
  return (
    <section className={classes.container} id="contact">
      <h2 className="t-title tx-2">Vamos conversar?</h2>
      <address className={classes.contacts}>
        <ul>
          {CONTACTS.map((contact) => (
            <li className={classes.listItem} key={contact.label}>
              <span className="t-small tx-0">{contact.label}</span>
              <a className="t-contact tx-1" href={contact.link} target="_blank">
                {contact.readableFormat}
              </a>
            </li>
          ))}
        </ul>
      </address>
      <address className={`${classes.address} tx-0 t-paragraph`}>
        Viamão - RS, Brasil
      </address>
      <SocialLinks />
    </section>
  );
};

export default Contacts;

