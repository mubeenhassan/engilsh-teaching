import React from "react"

function TextImageContainer({ t, image, textPortion, className }) {
  return (
    <div class={`text-image-container ${className}`}>
      <div class="image-side">
        <img src={image} alt="" />
      </div>
      <div
        class="text-side"
        dangerouslySetInnerHTML={{ __html: t(textPortion) }}
      />
    </div>
  )
}
export default TextImageContainer
