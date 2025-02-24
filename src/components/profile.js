import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Container, Typography, Checkbox, FormControlLabel, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import BadgeIcon from '@mui/icons-material/Badge';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PhoneIcon from '@mui/icons-material/Phone';
import NumbersIcon from '@mui/icons-material/Numbers';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';


const ProfileForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        phoneNumber: '',
        gender: '',
        jobPosition: '',
        currentAddress: '',
        permanentAddress: ''
    });

    const [sameAddress, setSameAddress] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleCheckboxChange = (event) => {
        setSameAddress(event.target.checked);
        if (event.target.checked) {
            setFormValues({
                ...formValues,
                permanentAddress: formValues.currentAddress
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <Container maxWidth="sm">
                <Typography variant="h6" align="center" gutterBottom>
                <BadgeIcon sx={{ fontSize: 60, verticalAlign: 'middle', mr: 1 }} />
                Job Application
                </Typography>
                <form onSubmit={handleSubmit}>
                <Box display="flex" alignItems="center">
                <AccountBoxIcon sx={{ fontSize: 35, marginRight: 1 }} />
                    <TextField
                        label="Name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                </Box>
                <Box display="flex" alignItems="center">
                    <NumbersIcon sx={{ fontSize: 35, marginRight: 1 }} />
                    <TextField
                        label="Age"
                        name="age"
                        type="number"
                        value={formValues.age}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        inputProps={{ min: 20, max: 50 }}
                    /></Box>
                    
                    <Box display="flex" alignItems="center">
                    <PhoneIcon sx={{ fontSize: 35, marginRight: 1 }} />
                    <TextField
                    
                        label="Phone Number"
                        name="phoneNumber"
                        value={formValues.phoneNumber}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                    />
                    </Box>
                    <Box display="flex" alignItems="center">
                    <WcOutlinedIcon sx={{ fontSize: 35, marginRight: 1 }} />
                    <FormControl fullWidth margin="normal" variant="outlined">
                    
                        <InputLabel>Gender</InputLabel>
                        <Select
                            name="gender"
                            value={formValues.gender}
                            onChange={handleChange}
                            label="Gender"
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    <Box display="flex" alignItems="center">
                    <WorkIcon sx={{ fontSize: 35, marginRight: 1 }} />
                    <FormControl fullWidth margin="normal" variant="outlined">
                        <InputLabel>Job Position</InputLabel>
                        <Select
                            name="jobPosition"
                            value={formValues.jobPosition}
                            onChange={handleChange}
                            label="jobPosition"
                        >
                            <MenuItem value="Java Developer">Java Developer</MenuItem>
                            <MenuItem value="Python Developer">Frontend Developer</MenuItem>
                            <MenuItem value="C++ Developer">Backend Developer</MenuItem>
                            <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
                        </Select>
                    </FormControl>
                    </Box>
                    <Box display="flex" alignItems="center">
                    <HomeIcon sx={{ fontSize: 35, marginRight: 1 }} />
                    <TextField
                        label="Current Address"
                        name="currentAddress"
                        value={formValues.currentAddress}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                    </Box>
                    
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={sameAddress}
                                onChange={handleCheckboxChange}
                                name="sameAddress"
                                color="primary"
                            />
                        }
                        label="Same as Current Address"
                    />
                    <Box display="flex" alignItems="center">
                    <HomeIcon sx={{ fontSize: 35, marginRight: 1 }} />
                    <TextField
                        label="Permanent Address"
                        name="permanentAddress"
                        value={formValues.permanentAddress}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        multiline
                        rows={4}
                        disabled={sameAddress}
                    />
                    </Box>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </form>
            
        </Container>
    );
};

export default ProfileForm;