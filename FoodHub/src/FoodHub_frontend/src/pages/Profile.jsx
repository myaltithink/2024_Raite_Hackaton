import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import PasswordField from "../components/PasswordField";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPencilAlt, faX } from "@fortawesome/free-solid-svg-icons";

function Profile(props){

    const [details, setDetails] = useState({
        username: "",
        password: "",
        firstName: '',
        lastName: '',
        hasOrganization: false,
        organizationName: '',
        organizationAddress: ''
    });

    const [newDetails, setNewDetails] = useState({
        username: "",
        password: "",
        firstName: '',
        lastName: '',
        hasOrganization: false,
        organizationName: '',
        organizationAddress: ''
    });

    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        //retrive user data
    })

    const toggleEdit = () => {
        setIsEdit(!isEdit);
    }

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setDetails({
            ...details,
            [id]: value
        });
    }

    const handleCheckboxChange = (e) => {
        setDetails({
            ...details,
            hasOrganization: e.target.checked
        })
    }

    return (
        <div className="profile-container center-parent">
            <div className="profile shadow">
                <h3 style={{textAlign: "center"}} className="mt-3">Profile</h3>
                <TextField 
                    slotProps={{
                        input: {
                            readOnly: !isEdit
                        }
                    }}
                    className="field"
                    id="firstName"
                    label="First Name"
                    fullWidth
                    size="small"
                    value={details.firstName}
                    onChange={handleInputChange}/>

                <TextField 
                    slotProps={{
                        input: {
                            readOnly: !isEdit
                        }
                    }}
                    className="field"
                    id="lastName"
                    label="Last Name"
                    fullWidth
                    size="small"
                    value={details.lastName}
                    onChange={handleInputChange}/>

                <TextField 
                    slotProps={{
                        input: {
                            readOnly: !isEdit
                        }
                    }}
                    className="field"
                    id="username" 
                    value={details.username} 
                    label="Username" 
                    fullWidth 
                    size="small" 
                    onChange={handleInputChange}/>

                <PasswordField 
                    readOnly={!isEdit}
                    value={details.password} 
                    changed={handleInputChange}/>

                    
                <FormControlLabel 
                    control={<Checkbox disabled={!isEdit} onChange={handleCheckboxChange}/>} 
                    label="Do you belong to an organization?"/>
                {details.hasOrganization?
                    <>
                        <TextField
                            slotProps={{
                                input: {
                                    readOnly: !isEdit
                                }
                            }}
                            className="field"
                            id="organizationName"
                            label="Organization Name"
                            fullWidth
                            size="small"
                            value={details.organizationName}
                            onChange={handleInputChange}/>

                        <TextField
                            slotProps={{
                                input: {
                                    readOnly: !isEdit
                                }
                            }}
                            className="field"
                            id="organizationAddress"
                            label="Organization Address"
                            fullWidth
                            size="small"
                            value={details.organizationAddress}
                            onChange={handleInputChange}/>
                    </>: null }


                <div className="controls">

                    {isEdit?
                        <>
                            <Button onClick={toggleEdit} variant="contained" color="error" className="control-item">
                                <FontAwesomeIcon icon={faX} className="me-2"/>
                                Cancel
                            </Button>

                            <Button variant="contained" color="success" className="control-item">
                                <FontAwesomeIcon icon={faCheck} className="me-2"/>
                                Save
                            </Button>
                        </>
                    :
                        <>
                            <Button onClick={toggleEdit} variant="contained" color="primary" className="control-item">
                                <FontAwesomeIcon icon={faPencilAlt} className="me-2"/>
                                Edit
                            </Button>
                        </>
                    }


                </div>
            </div>
        </div>
    )

}

export default Profile;