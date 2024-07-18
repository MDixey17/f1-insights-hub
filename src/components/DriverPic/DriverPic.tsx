import { Heading, ProfilePic, Section } from "blue-titanium-ui"
import { F1_DRIVERS } from "../../constants/Drivers/DriverConstants"
import "./DriverPic.css"

interface DriverPicProps {
  driverName: string
  caption: string
}

export const DriverPic = ({ driverName, caption }: DriverPicProps) => {
  return (
    <Section
      direction="column"
      justify="center"
      align="center"
      isPrimary
      className="driver-sec"
    >
      <ProfilePic
        img={F1_DRIVERS.get(driverName) ?? ""}
        altText={driverName}
        size="md"
        addHover
      />
      <Heading size="xl">{caption}</Heading>
    </Section>
  )
}
