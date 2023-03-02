import Link from 'next/link';
import React from 'react';

class CascadingDropdowns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: '',
      year: '',
      semester: '',
      division: '',
    };
  }

  handleCourseChange = (event) => {
    this.setState({ course: event.target.value });
  };

  handleYearChange = (event) => {
    this.setState({ year: event.target.value });
  };

  handleSemesterChange = (event) => {
    this.setState({ semester: event.target.value });
  };

  handleDivisionChange = (event) => {
    this.setState({ division: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { course, year, semester, division } = this.state;
    const href = `/student?course=${course}&year=${year}&semester=${semester}&division=${division}`;
    const as = href;
    Router.push(href, as);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Course:
          <select value={this.state.course} onChange={this.handleCourseChange}>
            {/* options for course dropdown */}
          </select>
        </label>
        <label>
          Year:
          <select value={this.state.year} onChange={this.handleYearChange}>
            {/* options for year dropdown */}
          </select>
        </label>
        <label>
          Semester:
          <select value={this.state.semester} onChange={this.handleSemesterChange}>
            {/* options for semester dropdown */}
          </select>
        </label>
        <label>
          Division:
          <select value={this.state.division} onChange={this.handleDivisionChange}>
            {/* options for division dropdown */}
          </select>
        </label>
        <button type="submit">Submit</button>
        <Link href="/student">
          <a>Go to Student page</a>
        </Link>
      </form>
    );
  }
}

export default CascadingDropdowns;



//import { useState, useEffect } from 'react'

// const CascadingDropdowns = () => {
//   const [courses, setCourses] = useState([])
//   const [selectedCourse, setSelectedCourse] = useState('')
//   const [years, setYears] = useState([])
//   const [selectedYear, setSelectedYear] = useState('')
//   const [semesters, setSemesters] = useState([])
//   const [selectedSemester, setSelectedSemester] = useState('')
//   const [divisions, setDivisions] = useState([])
//   const [selectedDivision, setSelectedDivision] = useState('')

//   useEffect(() => {
//     // Load the list of courses
//     // You can replace this with your own API call
//     fetch('/api/courses')
//       .then(res => res.json())
//       .then(data => setCourses(data))
//       .catch(error => console.error(error))
//   }, [])

//   useEffect(() => {
//     // Load the list of years for the selected course
//     // You can replace this with your own API call
//     fetch(`/api/courses/${selectedCourse}/years`)
//       .then(res => res.json())
//       .then(data => setYears(data))
//       .catch(error => console.error(error))
//   }, [selectedCourse])

//   useEffect(() => {
//     // Load the list of semesters for the selected year
//     // You can replace this with your own API call
//     fetch(`/api/courses/${selectedCourse}/years/${selectedYear}/semesters`)
//       .then(res => res.json())
//       .then(data => setSemesters(data))
//       .catch(error => console.error(error))
//   }, [selectedCourse, selectedYear])

//   useEffect(() => {
//     // Load the list of divisions for the selected semester
//     // You can replace this with your own API call
//     fetch(`/api/courses/${selectedCourse}/years/${selectedYear}/semesters/${selectedSemester}/divisions`)
//       .then(res => res.json())
//       .then(data => setDivisions(data))
//       .catch(error => console.error(error))
//   }, [selectedCourse, selectedYear, selectedSemester])

//   return (
//     <div>
//       <select value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)}>
//         <option value="">Select a course</option>
//         {courses.map(course => (
//           <option key={course.id} value={course.id}>{course.name}</option>
//         ))}
//       </select>
//       <select value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)}>
//         <option value="">Select a year</option>
//         {years.map(year => (
//           <option key={year.id} value={year.id}>{year.name}</option>
//         ))}
//       </select>
//       <select value={selectedSemester} onChange={(event) => setSelectedSemester(event.target.value)}>
//         <option value="">Select a semester</option>
//         {semesters.map(semester => (
//           <option key={semester.id} value={semester.id}>{semester.name}</option>
//         ))}
//       </select>
//       <select value={selectedDivision} onChange={(event) => setSelectedDivision(event.target.value)}>
//         <option value="">Select a division</option>
//         {divisions.map(division => (
//           <option key={division.id} value={division.id}>{division.name}</option>
//         ))}
//       </select>
//     </div>
//   )
// }