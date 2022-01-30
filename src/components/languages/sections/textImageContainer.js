import React from "react"
import Button from "../../../layout/buttons"

function TextImageContainer({
  t,
  image,
  textPortion,
  className,
  image2,
  button,
}) {
  return (
    <div class={`text-image-container ${className}`}>
      <div class="image-side">
        <img src={image} alt="" />
      </div>
      {image2 && (
        <div class="image-side">
          <img src={image2} alt="" />
        </div>
      )}

      {textPortion && (
        <div
          class="text-side"
          dangerouslySetInnerHTML={{ __html: t(textPortion) }}
        />
      )}

      {button && <Button buttonText={button} />}
    </div>
  )
}
export default TextImageContainer
