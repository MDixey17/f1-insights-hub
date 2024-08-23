import { Heading, Section, Spinner } from "blue-titanium-ui"
import { useParams } from "react-router-dom"
import { DriverPic } from "../DriverPic/DriverPic"
import { Journey } from "../Journey/Journey"
import "./Driver.css"
import { DriverResponse } from "../../models/F1Insights/DriverResponse"
import { useEffect, useState } from "react"
import { useLoadingContext } from "../../contexts/LoadingContext"
import { F1InsightsService } from "../../services/f1InsightsService"
import { ConstructorResponse } from "../../models/F1Insights/ConstructorResponse"
import { DriverUtils } from "../../utils/driverUtils"

export const Driver = () => {
  const { driver = "Lando Norris" } = useParams()
  const [isLoading, setLoading] = useLoadingContext()
  const [driverData, setDriverData] = useState<DriverResponse | undefined>(
    undefined
  )
  const [constructorData, setConstructorData] = useState<
    ConstructorResponse | undefined
  >(undefined)

  useEffect(() => {
    const getDriverData = async () => {
      setLoading(true)
      const driverResponse = await F1InsightsService.getDriverByName(
        undefined,
        undefined,
        driver.split("-")[1]
      )
      setDriverData(driverResponse)
      const constructorResponse = await F1InsightsService.getConstructorById(
        driverResponse.constructorId
      )
      setConstructorData(constructorResponse)
      setLoading(false)
    }

    getDriverData()
  }, [setLoading, driver])

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
      {!isLoading && driverData && constructorData && (
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
                {driverData.firstName + " " + driverData.lastName}
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
                {constructorData.name}
              </p>
            </Section>
            <DriverPic
              driverName={driverData.firstName + " " + driverData.lastName}
              caption=""
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
            className="driver-f1-container"
          >
            <Heading isBlue size="xl">
              Formula 1 Career
            </Heading>
            <Section isPrimary direction="row" justify="center" align="center">
              <Section justify="center" align="center" isPrimary>
                <p className="driver-f1-text">
                  <strong>Races: </strong>
                  {driverData.races}
                  <br />
                  <br />
                  <strong>Race Wins: </strong>
                  {driverData.wins}
                  <br />
                  <br />
                  <strong>Podiums: </strong>
                  {driverData.podiums}
                  <br />
                  <br />
                  <strong>Fastest Laps: </strong>
                  {driverData.fastestLaps}
                  <br />
                  <br />
                  <strong>World Championships: </strong>
                  {driverData.championships}
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
                {DriverUtils.sortCareerMap(driverData.career).map((team) => (
                  <Journey
                    team={team.constructorName}
                    startYear={team.startYear}
                    endYear={team.endYear ?? undefined}
                  />
                ))}
              </Section>
            </Section>
          </Section>
        </>
      )}
    </>
  )
}
