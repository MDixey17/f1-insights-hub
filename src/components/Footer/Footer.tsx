import { Heading, Section } from "blue-titanium-ui"
import OpenF1 from "../../assets/logos/openf1.png"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer-container">
      <Section direction="column" justify="center" align="center">
        <Heading size="lg">Data obtained from</Heading>
        <Section justify="center" align="center" className="footer-section">
          <a
            href="https://openf1.org/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-openf1"
          >
            <img src={OpenF1} alt="OpenF1 API" />
          </a>
          <a
            href="http://ergast.com/mrd/"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-ergast"
          >
            Ergast API (deprecated)
          </a>
        </Section>
      </Section>
    </div>
  )
}
