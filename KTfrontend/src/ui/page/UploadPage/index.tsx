import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AWS from 'aws-sdk';

const S3_BUCKET = 'proecttesting';
const REGION = 'ap-southeast-1';
const ACCESS_KEY = 'AKIAZQ3DP43JAHUVQRTN'; // Update with your actual access key
const SECRET_ACCESS_KEY = 'oeQV4Q0tFK8k39E3KkMRcdBIuKn4IKbmexjvsVB0'; // Update with your actual secret access key

const s3 = new AWS.S3({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
});


export default function UploadVideoPage() {
    const [uploading, setUploading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // Add type declaration for selectedFile

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
            handleUpload(e.target.files[0]);
        }
    };

    const handleUpload = async (file: File | null) => {
        if (!file) return;

        const folderName = 'new_folder'; // Specify the folder name , format : if use firebase for login , userID+useName ? 001LucasPun
        const fileName = file.name;

        const params = {
            Bucket: S3_BUCKET,
            Key: `${folderName}/${fileName}`,
            Body: file,
            ACL: 'public-read'
        };

        try {
            const data = await s3.upload(params).promise();
            console.log('Upload successful:', data.Location);
        } catch (err) {
            console.error('Error uploading file:', err);
        }
    };
    useEffect(() => {
        const handleDragEnter = (e) => {
            e.preventDefault();
            setIsDragging(true);
        };

        const handleDragLeave = (e) => {
            e.preventDefault();
            setIsDragging(false);
        };

        const handleDrop = (e) => {
            e.preventDefault();
            setIsDragging(false);
            handleUpload(selectedFile);
        };

        // Add event listeners to handle drag and drop on the entire document
        document.body.addEventListener('dragenter', handleDragEnter);
        document.body.addEventListener('dragover', handleDragEnter);
        document.body.addEventListener('dragleave', handleDragLeave);
        document.body.addEventListener('drop', handleDrop);

        return () => {
            // Cleanup event listeners when component unmounts
            document.body.removeEventListener('dragenter', handleDragEnter);
            document.body.removeEventListener('dragover', handleDragEnter);
            document.body.removeEventListener('dragleave', handleDragLeave);
            document.body.removeEventListener('drop', handleDrop);
        };
    }, [selectedFile]);

    return (
        <Box
            style={{
                height: '80vh',
                width: '80vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isDragging ? 'lightblue' : 'white',
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="h4" gutterBottom textAlign="center">
                    Upload File
                </Typography>
                <input type="file" onChange={handleFileInput} />
                <button onClick={() => handleUpload(selectedFile)}>
                    Upload to S3</button>

                <Box
                    style={{
                        cursor: 'pointer',
                        border: `2px dashed ${isDragging ? 'blue' : 'gray'}`,
                        padding: '20px',
                        borderRadius: '10px',
                    }}
                >
                    <input
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleFileInput}
                    />
                    <CloudUploadIcon fontSize='large' color='disabled' />
                    <Typography variant="body1" style={{ color: isDragging ? 'blue' : 'inherit' }}>
                        {isDragging ? 'Drop your video file / picture here' : 'Drag & drop video file  / picture here, or click to select'}
                    </Typography>
                </Box>
                <Box>
                    {/* Your additional content */}
                </Box>
                {uploading && <CircularProgress style={{ marginTop: '20px' }} />}
            </Container>
        </Box>
    );
}