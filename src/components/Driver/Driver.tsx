import { Heading, Section } from "blue-titanium-ui"
import { useParams } from "react-router-dom"
import { DRIVER_DATA } from "../../data/Drivers"
import { DriverPic } from "../DriverPic/DriverPic"
import { Journey } from "../Journey/Journey"
import "./Driver.css"

export const Driver = () => {
  const { driver = "Lando Norris" } = useParams()

  const driverName = driver.replace("-", " ")

  const driverData = DRIVER_DATA.find(
    (driver) => driver.fullName === driverName
  )

  return driverData !== undefined ? (
    <>
      <Section
        isPrimary
        divider
        direction="row"
        justify="center"
        align="center"
        className="driver-bio-container"
        wrap="wrap"
      >
        <Section
          isPrimary
          direction="column"
          justify="center"
          className="driver-bio"
          wrap="wrap"
        >
          <Heading isBlue size="xl" className="driver-header">
            {driverName}
          </Heading>
          <p className="driver-info">
            <strong>Driver Number: </strong>
            {driverData.driverNumber}
            <br />
            <br />
            <strong>Home Country: </strong>
            {driverData.homeCountry}
            <br />
            <br />
            <strong>Current Team: </strong>
            {driverData.currentTeam}
          </p>
        </Section>
        <DriverPic driverName={driverName} caption="" size="lg" />
      </Section>
      <Section
        isPrimary
        divider
        direction="column"
        justify="center"
        align="center"
        wrap="wrap"
        className="driver-f1-container"
      >
        <Heading isBlue size="xl">
          Formula 1 Career
        </Heading>
        <Section isPrimary direction="row" justify="center" align="center">
          <Section justify="center" align="center" isPrimary>
            <p className="driver-f1-text">
              <strong>Races: </strong>
              {driverData.careerStats.races}
              <br />
              <br />
              <strong>Race Wins: </strong>
              {driverData.careerStats.raceWins}
              <br />
              <br />
              <strong>Podiums: </strong>
              {driverData.careerStats.podiums}
              <br />
              <br />
              <strong>Fastest Laps: </strong>
              {driverData.careerStats.fastestLaps}
              <br />
              <br />
              <strong>World Championships: </strong>
              {driverData.careerStats.worldChampionships}
              <br />
              <br />
            </p>
          </Section>
          <Section
            isPrimary
            direction="column-reverse"
            justify="center"
            align="center"
            className="driver-f1-career"
          >
            {driverData.journey.map((team) => (
              <Journey
                team={team.team}
                startYear={team.startYear}
                endYear={team.endYear}
              />
            ))}
          </Section>
        </Section>
      </Section>
    </>
  ) : (
    <Section isPrimary divider justify="center" align="center">
      No data is available for the provided driver! Please check back later.
    </Section>
  )
}
