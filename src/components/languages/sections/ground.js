import React from "react"
import ground from "../../../statics/images/ground.png"

function Ground({ t }) {
  return (
    <div className="ground-section" style={{ backgroundImage: `url(${ground})` }}>
      <div className="ground-text"
          dangerouslySetInnerHTML={{ __html: t('visit_major_cities') }}
      />
      
    </div>
  )
}
export default Ground
