import React from 'react'
import BoilerPlatePostandLearn from './BoilerPlatePostandLearn'
const heading = "Promotion";
const allhead = ["Quick and Easy Way to Advertise","Hire for Your company:","Reach out to qualified matches:"]

const mainheading = "Post Jobs";

const paras = ["If you're looking to fill open positions with qualified and competent workers, Jobxpro is your best bet.","Simply post your work specifications and due dates on our platform. You will be updated on the status of application submissions as they come in.","Get in touch with good fits by sorting out candidates using different criteria. There is no extra work or inconvenience involved."]
const image = require("../../assets/learn.jpg")


const PostJobsLearn = () => {
  return (
    <BoilerPlatePostandLearn heading={heading} paras={paras} image={image} allhead={allhead} mainheading = {mainheading}/>
  )
}

export default PostJobsLearn
