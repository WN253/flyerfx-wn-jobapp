import React, { useState } from 'react';
import { Container, Box, Typography, Button, Input } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const DocumentUploads = () => {
    const [selectedFile, setSelectedFile] = useState(null);

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

        fetch(uploadUrl, {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('File uploaded successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('File upload failed!');
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
        </Container>
    );
};

export default DocumentUploads;