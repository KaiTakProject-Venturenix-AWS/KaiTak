import React, { useState } from 'react';
import { S3 } from 'aws-sdk';

const S3_BUCKET = 'proecttesting';
const REGION = 'ap-southeast-1';
const ACCESS_KEY = 'AKIAZQ3DP43JAHUVQRTN';
const SECRET_ACCESS_KEY = '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';

//https://www.mohammadfaisal.dev/blog/how-to-upload-files-to-aws-s3-in-react
//https://stackoverflow.com/questions/71080354/getting-the-bucket-does-not-allow-acls-error
const s3 = new S3({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
});

const UploadImageToS3WithReactS3 = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async (file) => {
        const params = {
            Bucket: S3_BUCKET,
            Key: file.name,
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

    return (
        <div>
            <div>React S3 File Upload</div>
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => handleUpload(selectedFile)}>Upload to S3</button>
        </div>
    );
};

export default UploadImageToS3WithReactS3;