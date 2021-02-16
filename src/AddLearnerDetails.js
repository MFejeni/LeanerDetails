import './App.css'
import Button from './Button'
import AddParents from './AddParents'
import {  Route, BrowserRouter as Router} from 'react-router-dom'

function ShowDetails()
{
    alert('Application Form submitted')
}

const AddLearnerDetails = () => {
    return(
        <form className='add-form' onSubmit={ShowDetails}>
             <h1>Learner's Details</h1>
            <div className='form-control'>
                <label>Surname : </label>
                <input type='text' placeholder='Surname' required/>
                <label>Initials : </label>
                <input type='text' placeholder='Initials' size='10' required/>
                <label>Title : </label>
                <select name='Title'>
                        <option value='South African'>Mr</option>
                        <option value='non South African'>Miss</option>
                        <option value='non South African'>Mrs</option>
                        <option value='non South African'>Dr</option>
                    </select>
            </div>
            <div className='form-control'>
                <label>First Name(s) : </label>
                <input type='text' placeholder='Name' size='50' required/>
                <div>
                    <input type='text' placeholder='Second name' size='50'/>
                </div>
            </div>
            <div>
                <label for='Nationality'>Nationality : 
                    <select name='Nationality' required>
                        <option value='South African'>South African</option>
                        <option value='non South African'>non South African</option>
                    </select>
                </label>
                <label>ID/passport Number : </label>
                <input type='text' placeholder='ID/passport Number' required/>
            </div>
            <div>
            <label for='Race'>Race : 
                    <select name='Race'>
                        <option value='Asian'>Asian</option>
                        <option value='Black'>Black</option>
                        <option value='Coloured'>Coloured</option>
                        <option value='Whites'>Whites</option>
                        <option value='Other'>Other</option>
                    </select>
                </label>
                <label for='Gender'>Gender : 
                    <select name='Gender'>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                </label>
            </div>
            <div>
                <label>Home Language : </label>
                <input type='text' required/>
                <label>Riligion : </label>
                <input type='text' required/>
            </div>
            <table align='center'>
                <tr >
                <td><label>Home Address : </label></td>
                
                <td><input type='text' placeholder='Street Name and number' required/></td>
                </tr>
                <tr>
                    <td rowSpan='4'></td>
                <td><input type='text' placeholder='Surbub'/></td>
                </tr>
                <tr>
                <td><input type='text' placeholder='Town/City' required/></td>
                </tr>
                <tr>
                <td><input type='text' placeholder='Province' required/></td>
                </tr>
                <tr>
                <td><input type='text' placeholder='Zip code' required/></td>
                </tr>
            </table>

            <div>
                <label>Email Address : </label>
                <input type='text' placeholder='john@example.com'/>
            </div>
            <div>
                <label>Cell Number : </label>
                <input type='text'/>
            </div>
            <div>
                <label>Learner's Grade : </label>
                <input type='text'/>
            </div>
            <div>
                <label>Subjects</label>
            </div>
            <table className='SubjectsToChoose' align='center'>
                <tr>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='English' checked/>English
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Accounting'/>Accounting
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Afrikaans-FAL'/>Afrikaans-FAL</td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Bussiness Economics'/>Bussiness Economics
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Bussiness Studies'/>Bussiness Studies
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Class Music'/>Class Music
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Computer Application Technology'/>Computer Application Technology
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Computer Literacy'/>Computer Literacy
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Consumer Studies'/>Comsumer Studies
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Creatice Arts' />Creative Arts
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Dramatic Arts'/>Dramatic Arts
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Economic & Manangement Science'/>Economic & Manangement Science
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Geography' />Geography
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='History'/>History
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Human & Social Science'/>Human & Social Science
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Information Technology'/>Information Technology
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Life Science'/>Life Science
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Mathematical Literacy'/>Mathematical Literacy
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Mathematics'/>Mathematics
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Natural Science'/>Natural Science
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Physical Science'/>Physical Science
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Technology' />Technology
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Visual Arts'/>Visual Arts
                    </td>
                    <td>
                        <input type='checkbox' class='Subject' name='Subjects' value='Life Orientation'/>Life Orientation
                    </td>
                </tr>                
            </table>

            <div>
            <label for='Parents'>Living with : 
                    <select name='Parents'>
                        <option value='Both parents are alive'>Both parents</option>
                        <option value='Mother'>Mother only</option>
                        <option value='Father' onClick={DetailsOfFather()}>Father only</option>
                        <option value='Whites'>Guardian</option>
                    </select>
                </label>
            </div>
            <div>
                <Button color='lightgrey' text='Submit' />
            </div>
        </form>
    )
}

function DetailsOfFather(){
    return(
        <Router>
            <Route exact path='/AddParents' component={AddParents} />
        </Router>
    )
}

export default AddLearnerDetails