import React from 'react'
import './Home.css'
import logo from "../images/brandicon.png"


const Home = () => {
  return (
    <>
    <section id='home'>

    <div className='container p-5'>
      <div className='row'>

        <div className='col-md-12 col-div'>

          <img src={logo} id="imgg" alt="" />
          <h2>Hi! Iam Sunil Kumar</h2>
          <h1>A FullStack Devloper</h1>
          <div className='arr-div'> </div>

          <div className='btn-div'>
            <a href="/project" className='btn-project'>Project</a>
            <a href="/connect" className="btn-connect">Contact</a>
          </div>

          
        </div>
      </div>

    </div>
    </section>
    </>
  )
}

export default Home