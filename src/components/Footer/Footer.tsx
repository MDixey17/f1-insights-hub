import { Heading, Section } from "blue-titanium-ui"
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer-container">
      <Section direction="column" justify="center" align="center" wrap="wrap">
        <Heading size="lg">Data obtained from F1 Insights API project.</Heading>
      </Section>
    </div>
  )
}
