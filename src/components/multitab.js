import React, { useState } from 'react';
import { Tabs, Tab, Box, Container, Fade, Backdrop, CircularProgress } from '@mui/material';
import ProfileForm from './profile';
import Education from './education';
import DocumentUploads from './documentuploads';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';

const MultiTab = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [checked, setChecked] = useState(true);
    const [open, setOpen] = useState(false);

    const handleTabChange = (event, newValue) => {
        setChecked(false);
        setTimeout(() => {
            setActiveTab(newValue);
            setChecked(true);
        }, 300);
    };

    const handleNext = () => {
        setChecked(false);
        setTimeout(() => {
            if (activeTab === 'profile') {
                setActiveTab('education');
            } else if (activeTab === 'education') {
                setActiveTab('documentsupdates');
            }
            setChecked(true);
        }, 300);
    };

    const handleSubmit = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            alert('Form submitted successfully!');
        }, 2000); 
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileForm handleNext={handleNext} />;
            case 'education':
                return <Education handleNext={handleNext} />;
            case 'documentsupdates':
                return <DocumentUploads handleSubmit={handleSubmit} />;
            default:
                return null;
        }
    };

    return (
        <Container maxWidth="md">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                border={0}
                borderRadius={5}
                p={6}
                mt={3}
                boxShadow={5}
                bgcolor="background.paper"
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Tabs value={activeTab} onChange={handleTabChange} aria-label="basic tabs example">
                        <Tab icon={<LooksOneIcon />} label="Profile" value="profile" />
                        <Tab icon={<LooksTwoIcon />} label="Education" value="education" />
                        <Tab icon={<Looks3Icon />} label="Documents" value="documentsupdates" />
                    </Tabs>
                </Box>
                <Box sx={{ p: 3, width: '100%' }}>
                    <Fade in={checked} timeout={300}>
                        <div>{renderTabContent()}</div>
                    </Fade>
                </Box>
            </Box>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    );
};

export default MultiTab;