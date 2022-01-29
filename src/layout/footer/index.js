import React from "react"
import { FacebookWithCircle } from "@styled-icons/entypo-social/FacebookWithCircle"
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle"
import { TwitterWithCircle } from "@styled-icons/entypo-social/TwitterWithCircle"

import barcode from '../../statics/images/footer-code.png'

function Footer({ t }) {

  return (
    <footer>
    <div class="footer">
        <div class="social-icon">
            <ul class="social-link">
                <li><a href="#"><FacebookWithCircle /></a></li>
                <li><a href="#"><LinkedinWithCircle /></a></li>
                <li><a href="#"><TwitterWithCircle /></a></li>
            </ul>
            <ul class="social-item">
                <li><a href="#">English Through Football</a></li>
                <li><a href="#">Football Tours</a></li>
                <li><a href="#">English Summer camps</a></li>
                <li><a href="#">About us</a></li>
            </ul>
            <hr class="footer-hori" />
            <span>Copyright. SP Sports Academy. All rights Reserved</span>
        </div>
        <div className="barcodes">
          <img src={barcode}/>
        </div>
    </div>
</footer>
  )
}
export default Footer
