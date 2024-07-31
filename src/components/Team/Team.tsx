import { Heading, Section } from "blue-titanium-ui"
import { useParams } from "react-router-dom"
import { ConstructorUtils } from "../../utils/constructorUtils"
import { TeamLogo } from "../TeamLogo/TeamLogo"
import { F1_TEAMS } from "../../constants/Teams/TeamConstants"
import { DriverPic } from "../DriverPic/DriverPic"
import "./Team.css"

export const Team = () => {
  const { team = "McLaren" } = useParams()

  const teamData = ConstructorUtils.getConstructorData(team)

  return teamData !== undefined ? (
    <>
      <Section
        isPrimary
        divider
        direction="row"
        justify="center"
        align="center"
        wrap="wrap"
        className="team-bio-container"
      >
        <Section
          isPrimary
          direction="column"
          justify="center"
          className="team-bio"
          wrap="wrap"
        >
          <Heading isBlue size="xl" className="team-header">
            {teamData.name}
          </Heading>
          <p className="team-info">
            <strong>Team Principal: </strong>
            {teamData.principal}
            <br />
            <br />
            <strong>Constructor's Championships: </strong>
            {teamData.constructorChampionships}
            <br />
            <br />
            <strong>Driver's Championships: </strong>
            {teamData.driversChampionships}
            <br />
            <br />
          </p>
        </Section>
        <TeamLogo image={F1_TEAMS.get(team) ?? ""} altText={team} size="lg" />
      </Section>
      <Section
        isPrimary
        divider
        direction="column"
        justify="center"
        align="center"
        wrap="wrap"
        className="team-drivers-container"
      >
        <Heading isBlue size="xl">
          Current Drivers
        </Heading>
        <Section isPrimary justify="center" align="center" wrap="wrap">
          {teamData.drivers.map((driver) => (
            <DriverPic
              driverName={driver}
              caption={driver}
              size="lg"
              textSize="lg"
            />
          ))}
        </Section>
      </Section>
    </>
  ) : (
    <Section isPrimary divider justify="center" align="center">
      No data is available for the provided team! Please check back later.
    </Section>
  )
}
