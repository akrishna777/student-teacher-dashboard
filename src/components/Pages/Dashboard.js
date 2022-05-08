import React, { useState } from 'react'

const Dashboard = ({ inactive, toggleoff, stuData, teacherData }) => {
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        <div class="container">
          <h1>Our Statistics</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
            reiciendis fuga fugiat, ad labore quasi deleniti? Veniam earum fuga
            doloremque!
          </p>
          <div class="row">
            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-blue order-card">
                <div class="card-block">
                  <h6 class="m-b-20">Total Students</h6>
                  <h2 class="text-right">
                    <i class="fa-solid fa-graduation-cap mx-2"></i>
                    <span>{stuData.length}</span>
                  </h2>
                  <p class="m-b-0">
                    Satisfied Students<span class="f-right">351</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-green order-card">
                <div class="card-block">
                  <h6 class="m-b-20">Total Teachers</h6>
                  <h2 class="text-right">
                    <i class="fa-solid fa-person-chalkboard mx-2"></i>
                    <span>{teacherData.length}</span>
                  </h2>
                  <p class="m-b-0">
                    Student Ratings<span class="f-right">8/10</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-yellow order-card">
                <div class="card-block">
                  <h6 class="m-b-20">Courses Subscribed</h6>
                  <h2 class="text-right">
                    <i class="fa-solid fa-credit-card mx-2"></i>
                    <span>122</span>
                  </h2>
                  <p class="m-b-0">
                    Content Rating<span class="f-right">9/10</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-xl-3">
              <div class="card bg-c-pink order-card">
                <div class="card-block">
                  <h6 class="m-b-20">Active Visitors</h6>
                  <h2 class="text-right">
                    <i class="fa-solid fa-eye mx-2"></i>
                    <span>486</span>
                  </h2>
                  <p class="m-b-0">
                    Completed Orders<span class="f-right">351</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
