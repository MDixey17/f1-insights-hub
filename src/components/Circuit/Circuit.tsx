import { Heading, Section, Spinner } from "blue-titanium-ui"
import { useParams } from "react-router-dom"
import { TrackImage } from "../TrackImage/TrackImage"
import { F1_CIRCUITS } from "../../constants/Circuits/CircuitConstants"
import { Podium } from "../Podium/Podium"
import { CircuitUtils } from "../../utils/circuitUtils"
import "./Circuit.css"
import { DriverPic } from "../DriverPic/DriverPic"
import { useEffect, useState } from "react"
import { CircuitResponse } from "../../models/F1Insights/CircuitResponse"
import { useLoadingContext } from "../../contexts/LoadingContext"
import { F1InsightsService } from "../../services/f1InsightsService"

export const Circuit = () => {
  const { circuit } = useParams()
  const [isLoading, setLoading] = useLoadingContext()
  const [circuitData, setCircuitData] = useState<CircuitResponse | undefined>(
    undefined
  )

  useEffect(() => {
    const getCircuitData = async () => {
      setLoading(true)
      const circuitResponse = await F1InsightsService.getCircuitByLocation(
        circuit ?? "Miami"
      )
      setCircuitData(circuitResponse)
      setLoading(false)
    }

    getCircuitData()
  }, [setLoading, circuit])

  const currentYear = new Date().getFullYear()

  return (
    <>
      <Section
        isPrimary
        direction="column"
        justify="center"
        align="center"
        divider
      >
        {isLoading && <Spinner size="lg" />}
        {!isLoading && circuitData && (
          <>
            <Heading isBlue size="xl" className="circuit-header">
              {circuitData?.grandPrixName}
            </Heading>
            {circuitData && circuitData.previousResults.length > 0 && (
              <Section
                isPrimary
                justify="space-evenly"
                align="center"
                wrap="wrap"
              >
                <div>
                  <Podium
                    results={
                      circuitData.previousResults.find(
                        (result) => result.year === currentYear
                      )?.driverResults ?? []
                    }
                  />
                </div>
                <TrackImage
                  imagePath={F1_CIRCUITS.get(circuit ?? "") ?? ""}
                  trackName={""}
                />
              </Section>
            )}
            {circuitData && circuitData.previousResults.length === 0 && (
              <TrackImage
                imagePath={F1_CIRCUITS.get(circuit ?? "") ?? ""}
                trackName={""}
              />
            )}
          </>
        )}
      </Section>
      {circuitData && (
        <>
          <Section
            justify="space-around"
            align="center"
            divider
            isPrimary
            wrap="wrap"
          >
            <Heading isBlue size="xl">
              Circuit Data
            </Heading>
            <div>
              <p className="circuit-data-p">
                <strong>Track Name: </strong>
                {circuitData.name}
                <br />
                <br />
                <strong>Number of Laps: </strong>
                {circuitData.numberOfLaps}
                <br />
                <br />
                <strong>Circuit Length: </strong>
                {circuitData.length} km
                <br />
                <br />
                <strong>Race Distance: </strong>
                {circuitData.raceDistance} km
                <br />
              </p>
            </div>
          </Section>
          <Section direction="column" divider isPrimary>
            <div className="previous-winner-container">
              <Section direction="row" align="center" isPrimary wrap="wrap">
                <Heading size="xl" isBlue className="previous-winner-text">
                  Previous Winners
                </Heading>
                {CircuitUtils.getPreviousWinners(
                  circuitData.previousResults
                ).map((recentWinner) => (
                  <DriverPic
                    driverName={recentWinner.driverName}
                    caption={recentWinner.year.toString()}
                    size="sm"
                    textSize="lg"
                  />
                ))}
              </Section>
            </div>
            <div>
              <p className="world-record-lap">
                <strong>World Record: </strong>
                {circuitData.worldRecord.driverName}{" "}
                {`(${circuitData.worldRecord.year})`} -{" "}
                {circuitData.worldRecord.time}
              </p>
            </div>
          </Section>
        </>
      )}
    </>
  )
}
