import { Section } from "blue-titanium-ui"
import DefaultTeamLogo from "../../assets/teams/default.webp"
import { TeamLogo } from "../TeamLogo/TeamLogo"
import { F1_TEAMS } from "../../constants/Teams/TeamConstants"
import "./Journey.css"

interface JourneyProps {
  team: string
  startYear: number
  endYear: number | undefined
}

export const Journey = ({ team, startYear, endYear }: JourneyProps) => {
  const isYearEqual = (year1: number, year2: number) => year1 === year2

  const teamImage = F1_TEAMS.get(team)

  return (
    <Section isPrimary justify="center" align="center">
      <TeamLogo image={teamImage ?? DefaultTeamLogo} altText={team} size="sm" />
      <p className="journey-year-text">
        {teamImage === undefined && (
          <i className="team-text">
            {team} <br />
          </i>
        )}
        {endYear === undefined ? (
          <>{startYear}</>
        ) : isYearEqual(startYear, endYear) ? (
          <>{startYear}</>
        ) : (
          <>
            {startYear} - {endYear}
          </>
        )}
      </p>
    </Section>
  )
}
