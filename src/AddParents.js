

const AddParents = () => {
    return(
        <form clasName='add-form'>
             <h1>Father's Details</h1>
            <div clasName='form-control'>
                <label>Surname : </label>
                <input type='text' placeholder='Surname'/>
                <label>Initials : </label>
                <input type='text' placeholder='Initials'/>
                <label>Title : </label>
                <input type='text' placeholder='Mr/Miss/Mrs...'/>
            </div>
            <div clasName='form-control'>
                <label>Full Name(s) : </label>
                <input type='text' placeholder='Name'/>
            </div>
            <div>
                <label for='Nationality'>Nationality : 
                    <select name='Nationality'>
                        <option value='South African'>South African</option>
                        <option value='non South African'>non South African</option>
                    </select>
                </label>
                <label>ID/passport Number : </label>
                <input type='text' placeholder='ID/passport Number'/>
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
                <label for='Marital'>Marital Status : 
                    <select name='Marital'>
                        <option value='Male'>Single</option>
                        <option value='Female'>Married</option>
                        <option value='Male'>Divorced</option>
                        <option value='Female'>uninvoled</option>
                    </select>
                </label>
            </div>
            <div>
                <label>Home Language : </label>
                <input type='text'/>
                <label>Riligion : </label>
                <input type='text'/>
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
            <label for='Relationship'>Relationship : 
                    <select name='Relationship'>
                        <option value='Father'>Father</option>
                        <option value='Mother'>Mother</option>
                        <option value='Other'>Other</option>
                    </select>
                </label>
            </div>
        </form>
    )
}

export default AddParents