import type { TCertificateList } from "../../portfolioData";

import classes from "./CertificatesInstitution.module.css";

type Props = {
  certificateList: TCertificateList;
};

/**
 * Lista de certificados de uma determinada instituição
 * @param certificateList Objeto com nome da instituição e certificados
 */
const CertificatesInstitution = ({ certificateList }: Props) => {
  return (
    <li className={classes.container}>
      <h3 className="t-project-title tx-2">{certificateList.institution}</h3>
      <ul>
        {certificateList.modules.map(({ name, hours }) => (
          <li key={name}>
            <p className={`t-paragraph tx-2 ${classes.name}`}>{name}</p>
            <p className={`t-small tx-0 ${classes.hours}`}>{hours}h</p>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default CertificatesInstitution;

