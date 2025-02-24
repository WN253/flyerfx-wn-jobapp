import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography, IconButton } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
    const [educationList, setEducationList] = useState([
        { degree: '', institution: '', year: '', percentage: '' }
    ]);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedEducationList = [...educationList];
        updatedEducationList[index][name] = value;
        setEducationList(updatedEducationList);
    };

    const handleAddEducation = () => {
        if (educationList.length < 3) {
            setEducationList([...educationList, { degree: '', institution: '', year: '', percentage: '' }]);
        } else {
            alert('Maximum 3 Education Details Allowed!!!');
        }
    };

    const handleRemoveEducation = (index) => {
        const updatedEducationList = educationList.filter((_, i) => i !== index);
        setEducationList(updatedEducationList);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Education Details:", educationList);
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <Typography variant="h6" align="center" gutterBottom>
                    <SchoolIcon sx={{ fontSize: 60, verticalAlign: 'middle', mr: 1 }} />
                    Education Details
                </Typography>
                {educationList.map((education, index) => (
                    <Box key={index} mb={2}>
                        <TextField
                            label="Degree Name"
                            name="degree"
                            value={education.degree}
                            onChange={(event) => handleInputChange(index, event)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="University/College Name"
                            name="institution"
                            value={education.institution}
                            onChange={(event) => handleInputChange(index, event)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Year of Passing"
                            name="year"
                            type="number"
                            value={education.year}
                            onChange={(event) => handleInputChange(index, event)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Percentage/CGPA"
                            name="percentage"
                            type="number"
                            value={education.percentage}
                            onChange={(event) => handleInputChange(index, event)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        {educationList.length > 1 && (
                            <IconButton onClick={() => handleRemoveEducation(index)} color="secondary">
                                <Delete />
                            </IconButton>
                        )}
                    </Box>
                ))}
                <Button onClick={handleAddEducation} variant="outlined" color="primary" startIcon={<Add />} fullWidth>
                    Add More Education
                </Button>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default Education;