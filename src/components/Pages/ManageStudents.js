import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ManageStudents = ({
  inactive,
  toggleoff,
  studentFormData,
  setStudentFormData,
  studentInitialValues,
}) => {
  const handleChange = (e) => {
    setStudentFormData({ ...studentFormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(studentFormData)
    if (studentFormData.id) {
      updateStudent()
      setStudentFormData(studentInitialValues)
    } else {
      addStudent()
      setStudentFormData(studentInitialValues)
    }
  }

  const addStudent = async () => {
    try {
      const resp = await axios.post(
        'https://6276914abc9e46be1a1801f3.mockapi.io/students',
        studentFormData,
      )
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  const updateStudent = async () => {
    try {
      const resp = await axios.put(
        `https://6276914abc9e46be1a1801f3.mockapi.io/students/${studentFormData.id}`,
        studentFormData,
      )
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  let navigate = useNavigate()
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        <div class="container">
          <h1>Student Management</h1>
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
                  value={studentFormData.FirstName}
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
                  value={studentFormData.LastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="form-row d-flex my-2">
              <div class="form-group col-md-4 mx-2">
                <label for="inputCourse">Course</label>
                <input
                  name="Course"
                  type="text"
                  class="form-control"
                  id="course"
                  value={studentFormData.Course}
                  onChange={handleChange}
                />
              </div>
              <div class="form-group col-md-4 mx-2">
                <label for="inputBatch">Batch</label>
                <input
                  name="Batch"
                  type="text"
                  class="form-control"
                  id="batch"
                  value={studentFormData.Batch}
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
                  value={studentFormData.PhoneNumber}
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
              Add Student
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
              <p>Student has been added.</p>
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
                  navigate(`/students`)
                }}
              >
                Go to Students Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageStudents
