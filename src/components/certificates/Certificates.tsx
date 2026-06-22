import Title from "../Title";
import CertificatesInstitution from "./CertificatesInstitution";

import { portfolioData } from "../../portfolioData";

import classes from "./Certificates.module.css";

/**
 * Seção de certificados
 */
const Certificates = () => {
  return (
    <div className={classes.wrapper} id="certificates">
      <section className={classes.container}>
        <Title subtitle="e agora meus">Certificados</Title>
        <ul>
          {portfolioData.certificates.map((certificateList) => (
            <CertificatesInstitution
              certificateList={certificateList}
              key={certificateList.institution}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Certificates;

