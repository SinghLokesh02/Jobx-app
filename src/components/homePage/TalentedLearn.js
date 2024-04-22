import React from 'react'
import BoilerPlatePostandLearn from './BoilerPlatePostandLearn'
const heading = "Promotion";
const allhead = ["Get discovered by companies looking to hire remote","Get your profile listed:","Customize your profile:"]

const mainheading = "Talented Candidates"

const paras = ["Find the best job for you by narrowing your search based on your priorities.","Get the attention of potential employers. Find internships and full-time positions by searching with keywords. Following your application, the recruiters will reach out to you directly.","JobXpro’s impressive customizability lets you zero in on organizations and fields that are a good fit for your expertise and interests. Learn how to use your unique set of experiences, education, and talents to pinpoint the greatest possible career path for you."]
const image = require("../../assets/talented.jpg")

const TalentedLearn = () => {
  return (
    <div>
       <BoilerPlatePostandLearn heading={heading} paras={paras} image={image} allhead={allhead} mainheading = {mainheading}/>
    </div>
  )
}

export default TalentedLearn
