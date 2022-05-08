import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ManageTeachers = ({
  inactive,
  toggleoff,
  teacherInitialValues,
  teacherFormData,
  setTeacherFormData,
}) => {
  const handleChange = (e) => {
    setTeacherFormData({ ...teacherFormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(teacherFormData)

    if (teacherFormData.id) {
      updateTeacher()
      setTeacherFormData(teacherInitialValues)
    } else {
      addTeacher()
      setTeacherFormData(teacherInitialValues)
    }
  }

  const addTeacher = async () => {
    try {
      const resp = await axios.post(
        'https://6276914abc9e46be1a1801f3.mockapi.io/teachers',
        teacherFormData,
      )
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  const updateTeacher = async () => {
    try {
      const resp = await axios.put(
        `https://6276914abc9e46be1a1801f3.mockapi.io/teachers/${teacherFormData.id}`,
        teacherFormData,
      )
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  const navigate = useNavigate()
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        <div class="container">
          <h1>Teacher Management</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            vitae molestias at dicta laudantium dolorem voluptates vero
            consequuntur facere quae deleniti, ex illum voluptas qui placeat,
            iste et quam non.
          </p>

          <form>
            <div class="form-row d-flex">
              <div class="form-group col-md-4 mx-2">
                <label for="inputFirstName">First Name</label>
                <input
                  name="FirstName"
                  type="text"
                  class="form-control"
                  id="firstname"
                  value={teacherFormData.FirstName}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-4 mx-2">
                <label for="inputLastName">Last Name</label>
                <input
                  name="LastName"
                  type="text"
                  class="form-control"
                  id="lastname"
                  value={teacherFormData.LastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row d-flex my-2">
              <div class="form-group col-md-4 mx-2">
                <label for="inputJoiningDate">JoiningDate</label>
                <input
                  name="JoiningDate"
                  type="text"
                  class="form-control"
                  id="joiningdate"
                  value={teacherFormData.JoiningDate}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-4 mx-2">
                <label for="inputBatchAssigned">Batch Assigned</label>
                <input
                  name="BatchAssigned"
                  type="text"
                  class="form-control"
                  id="batchassigned"
                  value={teacherFormData.BatchAssigned}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row my-2">
              <div class="form-group col-md-4 mx-2">
                <label for="inputPhoneNo">Phone No.</label>
                <input
                  name="PhoneNumber"
                  type="text"
                  class="form-control"
                  id="phonenumber"
                  value={teacherFormData.PhoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-primary my-4 mx-2"
              onClick={handleSubmit}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Teacher
            </button>
          </form>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Added Successfully</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Teacher has been added.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  navigate(`/teachers`)
                }}
              >
                Go to Teachers Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageTeachers
