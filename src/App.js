import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Pages/Home'
import Dashboard from './components/Pages/Dashboard'
import Students from './components/Pages/Students'
import ManageStudents from './components/Pages/ManageStudents'
import Teachers from './components/Pages/Teachers'
import ManageTeachers from './components/Pages/ManageTeachers'
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [inactive, setInactive] = useState(false)
  const [toggleoff, setToggleoff] = useState(false)

  const navigate = useNavigate()

  const [stuData, setStuData] = useState([])
  const [teacherData, setTeacherData] = useState([])

  const studentInitialValues = {
    FirstName: '',
    LastName: '',
    Course: '',
    Batch: '',
    PhoneNumber: '',
  }

  const teacherInitialValues = {
    FirstName: '',
    LastName: '',
    JoiningDate: '',
    PhoneNumber: '',
    BatchAssigned: '',
  }

  const [studentFormData, setStudentFormData] = useState(studentInitialValues)
  const [teacherFormData, setTeacherFormData] = useState(teacherInitialValues)

  const handleSelected = (id) => {
    const selectedData = stuData.filter((row) => row.id === id)[0]

    setStudentFormData(selectedData)
    navigate('/students/ManageStudents')
  }

  const teacherHandleSelected = (id) => {
    const selectedData = teacherData.filter((row) => row.id === id)[0]

    setTeacherFormData(selectedData)
    navigate('/teachers/ManageTeachers')
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar
          onCollapse={(inactive) => {
            setInactive(inactive)
          }}
          onToggleOff={(toggleoff) => {
            setToggleoff(toggleoff)
          }}
        />
        <Navbar inactive={inactive} toggleoff={toggleoff} />

        <Routes>
          <Route
            exact
            path="/"
            element={<Home inactive={inactive} toggleoff={toggleoff} />}
          />
          <Route
            exact
            path="/dashboard"
            element={
              <Dashboard
                inactive={inactive}
                toggleoff={toggleoff}
                stuData={stuData}
                setStuData={setStuData}
                teacherData={teacherData}
                setTeacherData={setTeacherData}
              />
            }
          />
          <Route
            exact
            path="/students"
            element={
              <Students
                inactive={inactive}
                toggleoff={toggleoff}
                handleSelected={handleSelected}
                stuData={stuData}
                setStuData={setStuData}
              />
            }
          />
          <Route
            exact
            path="/students/ManageStudents"
            element={
              <ManageStudents
                inactive={inactive}
                toggleoff={toggleoff}
                handleSelected={handleSelected}
                studentFormData={studentFormData}
                setStudentFormData={setStudentFormData}
                studentInitialValues={studentInitialValues}
                stuData={stuData}
                setStuData={setStuData}
              />
            }
          />
          <Route
            exact
            path="/teachers"
            element={
              <Teachers
                inactive={inactive}
                toggleoff={toggleoff}
                teacherData={teacherData}
                setTeacherData={setTeacherData}
                teacherHandleSelected={teacherHandleSelected}
              />
            }
          />
          <Route
            exact
            path="/teachers/ManageTeachers"
            element={
              <ManageTeachers
                inactive={inactive}
                toggleoff={toggleoff}
                teacherData={teacherData}
                setTeacherData={setTeacherData}
                teacherFormData={teacherFormData}
                setTeacherFormData={setTeacherFormData}
                teacherInitialValues={teacherInitialValues}
              />
            }
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
