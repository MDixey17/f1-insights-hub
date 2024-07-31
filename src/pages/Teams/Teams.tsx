import { Heading, Section } from "blue-titanium-ui"
import { F1_TEAMS } from "../../constants/Teams/TeamConstants"
import { Link } from "react-router-dom"
import { TeamLogo } from "../../components/TeamLogo/TeamLogo"
import "./Teams.css"

export const Teams = () => {
  const getTeamLink = (teamName: string): string => `/teams/${teamName}`

  return (
    <Section
      direction="column"
      justify="center"
      align="center"
      isPrimary
      divider
    >
      <Heading size="xl" isBlue>
        Teams
      </Heading>
      <Section
        isPrimary
        wrap="wrap"
        justify="space-evenly"
        className="teams-container"
      >
        {[...F1_TEAMS.keys()].map((team) => (
          <Link to={getTeamLink(team)}>
            <TeamLogo
              image={F1_TEAMS.get(team) ?? ""}
              altText={team}
              size="lg"
            />
          </Link>
        ))}
      </Section>
    </Section>
  )
}
