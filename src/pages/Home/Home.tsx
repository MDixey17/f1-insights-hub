import { Heading, ListCard, Section, Spinner } from "blue-titanium-ui"
import { useEffect, useState } from "react"
import { ErgastService } from "../../services/ergastService"
import { ConstructorStandings } from "../../models/Ergast/Standings/ConstructorStandings"
import { DriverStandings } from "../../models/Ergast/Standings/DriverStandings"
import { useLoadingContext } from "../../contexts/LoadingContext"
import { DriverUtils } from "../../utils/driverUtils"
import { ConstructorUtils } from "../../utils/constructorUtils"
import "./Home.css"
import { MostRecentRace } from "../../components/MostRecentRace/MostRecentRace"
import { RaceWins } from "../../data/RaceWins"
import { PolePositions } from "../../data/PolePositions"
import { PitStops } from "../../data/PitStops"
import { FastestLaps } from "../../data/FastestLaps"
import { DriverStandings as DriverData } from "../../data/DriverStandings"
import { ConstructorStandings as ConstructorData } from "../../data/ConstructorStandings"
import { DriverOfTheDay } from "../../data/DriverOfTheDay"
import { CardStat } from "../../models/Data/CardStat"

export const Home = () => {
  const [isLoading, setLoading] = useLoadingContext()
  const [constructorStandings, setConstructorStandings] = useState<CardStat>([])
  const [driverStandings, setDriverStandings] = useState<CardStat>([])

  useEffect(() => {
    const getCurrentData = async () => {
      try {
        setLoading(true)
        const constructorData: ConstructorStandings[] =
          await ErgastService.getCurrentConstructorStandings()
        const driverData: DriverStandings[] =
          await ErgastService.getCurrentDriverStandings()
        setConstructorStandings(
          ConstructorUtils.constructorStandingsToMap(constructorData)
        )
        setDriverStandings(DriverUtils.driverStandingsToMap(driverData))
      } catch (e) {
        console.error(
          "Going to stored backup. Error occurred calling Ergast API: ",
          e
        )
        setConstructorStandings(ConstructorData)
        setDriverStandings(DriverData)
      } finally {
        setLoading(false)
      }
    }

    getCurrentData()
  }, [setLoading])

  return (
    <div className="home-container">
      <Section
        direction="column"
        align="center"
        justify="center"
        divider
        isPrimary
        wrap="wrap"
      >
        <Heading size="xl" isBlue>
          F1 Insights Hub
        </Heading>
        <MostRecentRace />
      </Section>
      <Section
        justify="center"
        isPrimary
        className="home-s2"
        wrap="wrap"
        divider
      >
        {isLoading && (
          <div className="home-spinner">
            <Spinner size="lg" />
          </div>
        )}
        {!isLoading && (
          <>
            <ListCard title="Driver's Championship" data={driverStandings} />
            <ListCard
              title="Constructor's Championship"
              data={constructorStandings}
              spacing="lg"
            />
            <ListCard title="Grand Prix Wins" data={RaceWins} spacing="lg" />
            <ListCard title="Fastest Pit Stops" data={PitStops} spacing="lg" />
            <ListCard title="Fastest Laps" data={FastestLaps} spacing="lg" />
            <ListCard
              title="Pole Positions"
              data={PolePositions}
              spacing="lg"
            />
            <ListCard
              title="Driver of the Day"
              data={DriverOfTheDay}
              spacing="lg"
            />
          </>
        )}
      </Section>
    </div>
  )
}
