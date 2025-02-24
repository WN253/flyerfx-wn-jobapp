import React, { useState } from 'react';
import { TextField, Button, FormControl,InputLabel,Select, FormLabel, RadioGroup, FormControlLabel, Radio, MenuItem, Container, Typography, Checkbox, Box, Backdrop, CircularProgress } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PhoneIcon from '@mui/icons-material/Phone';
import NumbersIcon from '@mui/icons-material/Numbers';
import WcOutlinedIcon from '@mui/icons-material/WcOutlined';
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import BadgeIcon from '@mui/icons-material/Badge';

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
    const [open, setOpen] = useState(false);

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
        setOpen(true);
        console.log(formValues);
        setTimeout(() => {
            setOpen(false);
            alert('Form submitted successfully!');
        }, 2000);
    };

    const handleClose = () => {
        setOpen(false);
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
                    />
                </Box>
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
                    <FormControl component="fieldset" fullWidth margin="normal">
                        <FormLabel component="legend" sx={{ ml: 1 }}>Gender</FormLabel>
                        <RadioGroup sx={{ ml: 1 }}
                            name="gender"
                            value={formValues.gender}
                            onChange={handleChange}
                            row
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
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
                            label="Job Position"
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
                <FormControlLabel sx={{ ml: 4 }}
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
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                    Submit
                </Button>
            </form>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    );
};

export default ProfileForm;