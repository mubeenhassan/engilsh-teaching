import React from "react"
import TextImageContainer from "../../components/languages/sections/textImageContainer"
import InCludedInTour from "../../components/languages/sections/includedInTour"

import footballGround from "../../statics/images/football-ground.png"
import footballTeam from "../../statics/images/football-team.png"
import Ground from "../../components/languages/sections/ground"

function FootballTour({ t }) {
  return (
    <div className="home">
      <TextImageContainer
        t={t}
        image={footballGround}
        className="football-trip"
        textPortion="oganizing_trip"
      />
      <div class="section-between-text">
        <p>
          We specialise in tours in <span className="text-red">Valencia</span>{" "}
          and the <span className="text-red"> UK</span>
        </p>
      </div>
      <TextImageContainer
        t={t}
        image={footballTeam}
        className="football-team"
        textPortion="football_team_text"
      />
      <div class="section-between-text">
        <p>
          We specialise in tours in <span className="text-red">Valencia</span>{" "}
          and the <span className="text-red"> UK</span>
        </p>
      </div>
      <Ground t={t} />
      <InCludedInTour t={t} />
      <TextImageContainer
        t={t}
        className="eperimental-trip"
        textPortion="experimental_trip"
        textPortion2="experimental_trip2"
      />
    </div>
  )
}
export default FootballTour
