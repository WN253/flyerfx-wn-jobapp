import React, { useState } from 'react';
import { Container, Typography, Button, Input, Backdrop, CircularProgress } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DocumentUploads = ({ handleSubmit }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [open, setOpen] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        if (!selectedFile) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        const uploadUrl = '';

        setOpen(true);

        fetch(uploadUrl, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('File uploaded successfully!');
                setOpen(false);
                handleSubmit();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('File upload failed!');
                setOpen(false);
            });
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h6" align="center" gutterBottom>
                <CloudUploadIcon sx={{ fontSize: 60, verticalAlign: 'middle', mr: 1 }} />
                Upload Certificate
            </Typography>
            <Input
                type="file"
                onChange={handleFileChange}
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <Button
                onClick={handleUpload}
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<CloudUploadIcon />}
            >
                Upload
            </Button>
            <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
            >
                Submit
            </Button>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    );
};

export default DocumentUploads;