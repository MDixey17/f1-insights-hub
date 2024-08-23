import { Heading, Section, Spinner } from "blue-titanium-ui"
import { useParams } from "react-router-dom"
import { TeamLogo } from "../TeamLogo/TeamLogo"
import { F1_TEAMS } from "../../constants/Teams/TeamConstants"
import { DriverPic } from "../DriverPic/DriverPic"
import "./Team.css"
import { useLoadingContext } from "../../contexts/LoadingContext"
import { useEffect, useState } from "react"
import { ConstructorResponse } from "../../models/F1Insights/ConstructorResponse"
import { F1InsightsService } from "../../services/f1InsightsService"
import { DriverResponse } from "../../models/F1Insights/DriverResponse"

export const Team = () => {
  const { team = "McLaren" } = useParams()
  const [isLoading, setLoading] = useLoadingContext()
  const [teamData, setTeamData] = useState<ConstructorResponse | undefined>(
    undefined
  )
  const [drivers, setDrivers] = useState<DriverResponse[]>([])

  useEffect(() => {
    const getTeamData = async () => {
      setLoading(true)
      const teamResponse = await F1InsightsService.getConstructorByName(
        team.split(" ")[0]
      )
      const driver1 = await F1InsightsService.getDriverById(
        teamResponse.driverIds[0]
      )
      const driver2 = await F1InsightsService.getDriverById(
        teamResponse.driverIds[1]
      )
      setTeamData(teamResponse)
      setDrivers([driver1, driver2])
      setLoading(false)
    }

    getTeamData()
  }, [setLoading, team])

  return (
    <>
      {isLoading && (
        <Section
          isPrimary
          divider
          direction="row"
          justify="center"
          align="center"
          className="driver-bio-container"
          wrap="wrap"
        >
          <Spinner size="lg" />
        </Section>
      )}
      {!isLoading && teamData && (
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
                {teamData.teamPrincipal}
                <br />
                <br />
                <strong>Constructor's Championships: </strong>
                {teamData.constructorChampionships}
                <br />
                <br />
                <strong>Driver's Championships: </strong>
                {teamData.driverChampionships}
                <br />
                <br />
              </p>
            </Section>
            <TeamLogo
              image={F1_TEAMS.get(team) ?? ""}
              altText={team}
              size="lg"
            />
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
              {drivers.map((driver) => (
                <DriverPic
                  driverName={driver.firstName + " " + driver.lastName}
                  caption={driver.firstName + " " + driver.lastName}
                  size="lg"
                  textSize="lg"
                />
              ))}
            </Section>
          </Section>
        </>
      )}
    </>
  )
}
