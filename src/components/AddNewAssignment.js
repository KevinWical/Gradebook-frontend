import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import {SERVER_URL} from '../constants.js'

class AddNewAssignment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            assignmentName: '',
            dueDate: '',   
        };
    };

    /* Planning on returning the list of courses to populate a dropdown
    menu for the instructor to use, may need a new API to do this
    componentDidMount(){
        this.fetchCourses();
    }

    fetchCourses = () => {
        fetch get etc...

    }
    */

    handleFormSubmit = (event) => {
        event.preventDefault();

        const { assignmentName, dueDate } = this.state;
        // need to add + import {BACKEND_URL} to constants.js
        // also need to get the courseId from the getCourses method
        // to pass into this URL, it is hardcoded to the course with id 123456 for now
        fetch('http://localhost:8081/gradebook/123456', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            assignmentName,
            dueDate,
            }),
        })
            .then((response) => {
            if (response.ok) {
                console.log('Assignment added successfully.');
            } else {
                const errorMessage = response.statusText || 'Unknown error occurred';
                console.error('Failed to add assignment:', response.status, errorMessage);
            }
            })
            .catch((error) => {
            console.error('Error submitting form data:', error);
            });

            // Reset the fields to empty for adding another assignment
            this.setState({
                assignmentName: '',
                dueDate: '',
            });

    };

    handleImputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {

        const { assignmentName, dueDate } = this.state;

        return (
            <div align="left" style={{margin: 10}}>
                <h4>Add Assignment</h4>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="aname">Assignment Name:</label><br />
                    <input
                        type="text"
                        id="aname"
                        name="assignmentName"
                        value={assignmentName}
                        required
                        onChange={this.handleImputChange}
                    /><br />

                    <label htmlFor="duedate">Due Date:</label><br />
                    <input
                        type="date"
                        id="duedate"
                        name="dueDate"
                        placeholder="YYYY-MM-DD"
                        value={dueDate}
                        required
                        onChange={this.handleImputChange}
                    /><br />

                    <label htmlFor="cname">Course ID:</label><br />
                    <input
                        type="text"
                        id="cname"
                        name="cname"
                        value={123456}
                        placeholder='cst438-software engineering'
                        readOnly
                    /><br /><br />

                <button type="submit">Add New Assignment</button>
                </form>

                <Link to="/">Back to Assignment List</Link>
            </div>
        )
    }

}

export default AddNewAssignment;

// Assignment name, due date and course

/*
                <form>
                <label for="aname">Assignment Name:</label><br></br>
                <input type="text" id="aname" name="aname" required></input> <br></br>

                <label for="duedate">Due Date:</label><br></br>
                <input type="date" id="duedate" name="duedate" placeholder='YYYY-MM-DD' required></input> <br></br>

                <label for="cname">Course Name:</label><br></br>
                <input type="text" id="cname" name="cname" required></input> <br></br><br></br><br></br>
                   
                    <Button component={Link} to={{pathname:'/'}} 
                        variant='outlined' color='primary'>
                    Add New Assignment
                    </Button>
                </form>


                        try {
            // need to add + import {BACKEND_URL} to constants.js
            // also need to get the courseId from the getCourses method
            // to pass into this URL, it is hardcoded to the course with id 123456 for now
            const response = fetch(`http://localhost:8081/gradebook/123456`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAssignment),

            });
            // I am not getting an OK response
            console.log("response: ", response);
            if(response.ok){
                console.log('Assignment added successfully');
            } else {
                console.error('Failed to add assignment:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error submitting form data', error);
        }
*/