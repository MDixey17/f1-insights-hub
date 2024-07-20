import { Heading, ImageCard, Section } from "blue-titanium-ui"
import { F1_CIRCUITS } from "../../constants/Circuits/CircuitConstants"
import "./Circuits.css"
import { Link } from "react-router-dom"

export const Circuits = () => {
  return (
    <Section
      direction="column"
      justify="center"
      align="center"
      isPrimary
      divider
    >
      <Heading size="xl" isBlue>
        Circuits
      </Heading>
      <Section
        isPrimary
        wrap="wrap"
        justify="center"
        className="circuits-container"
      >
        {[...F1_CIRCUITS.keys()].map((circuit) => (
          <Link to={`/circuits/${circuit}`} className="circuit-link">
            <ImageCard
              text={circuit}
              imgPath={F1_CIRCUITS.get(circuit)!}
              className="circuit-img-card"
            />
          </Link>
        ))}
      </Section>
    </Section>
  )
}
