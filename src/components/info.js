import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Johnathan.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Passionate Front-end Developer, UI/UX Enthusiast and Web
        Developer.
        <br /> I enjoy solving tough technical solutions through creative development. 
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        {/* <a className="mr-5 icon" href="https://twitter.com/Mr404Found">
          <Twitter />
        </a> */}
        {/* <a className="mr-5 icon" href="https://instagram.com/sumanth.zero7">
          <Insta />
        </a> */}
        <a className="mr-5 icon" href="https://github.com/johnman747">
          <Github />
        </a>
        {/* <a
          className="mr-5 icon"
          href="https://www.youtube.com/channel/UCw0FDIL-HpcfzEZrjcQwhMQ"
        >
          <Youtube />
        </a> */}
        <a className="mr-5 icon" href="mailto://johnathan.moes@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
