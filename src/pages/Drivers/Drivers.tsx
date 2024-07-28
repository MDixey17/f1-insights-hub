import { Heading, Section } from "blue-titanium-ui"
import { F1_DRIVERS } from "../../constants/Drivers/DriverConstants"
import { Link } from "react-router-dom"
import { DriverPic } from "../../components/DriverPic/DriverPic"
import "./Drivers.css"

export const Drivers = () => {
  const getDriverLink = (driverName: string): string =>
    `/drivers/${driverName.replace(" ", "-")}`

  return (
    <Section
      direction="column"
      justify="center"
      align="center"
      isPrimary
      divider
    >
      <Heading size="xl" isBlue>
        2024 Drivers
      </Heading>
      <Section
        isPrimary
        wrap="wrap"
        justify="space-evenly"
        className="drivers-container"
      >
        {[...F1_DRIVERS.keys()].map((driver) => (
          <Link to={getDriverLink(driver)} className="driver-link">
            <DriverPic driverName={driver} caption={driver} />
          </Link>
        ))}
      </Section>
    </Section>
  )
}
