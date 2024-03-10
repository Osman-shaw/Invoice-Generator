/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, MenuItem, Button } from '@mui/material';




const InvoiceForm =()=> {

  const [formData, setFormData] = useState({
    logo: '',
    companyName: '',
    country: '',
    address: '',

});

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleImageUpload = (event) => {
    // Handle image upload logic here
};


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container spacing={2} style={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} md={8} style={{ height: '100%' }}>
                    {/* First Card (70% width on medium and larger screens) */}
                    <Card style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent>
                          <Typography className="main__header">
                            INVOICE
                          </Typography>
    
                          <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    {/* Image upload */}
                                  <label htmlFor="upload-input">
                                  <input
                                    id="upload-input"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                                <div
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        border: '1px dashed #ccc',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <img
                                        src={formData.logo || 'placeholder.png'}
                                        alt="Profile"
                                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                    />
                            
                                </div>
                                </label>
                                </Grid>
                                 <Grid item xs={12}>
                                    {/* Company Name */}
                                    <TextField
                                        name="companyName"
                                        label="Company Name"
                                        variant="standard"
                                        sx={{ m: 1, width: '40ch' }}
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    {/* Company Name */}
                                    <TextField
                                        name="address"
                                        label="address"
                                        variant="standard"
                                        sx={{ m: 1, width: '40ch' }}
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    {/* Country Selection */}
                                    <TextField 
                                        name="country"
                                        select
                                        label="Country"
                                        variant="standard"
                                        sx={{ m: 1, width: '40ch' }}
                                        value={formData.country}
                                        onChange={handleInputChange}
                                    >
                                        {/* Sample list of countries */}
                                        <MenuItem value="USA">USA</MenuItem>
                                        <MenuItem value="UK">UK</MenuItem>
                                        <MenuItem value="Canada">Canada</MenuItem>
                                        {/* Add more countries as needed */}
                                    </TextField>
                                </Grid >
                                 <div className="main___left__content">
                                 

                                </div>
                            </Grid >     
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} style={{ height: '100%' }}>
                    {/* Second Card (30% width on medium and larger screens) */}
                    <Card style={{ width: '100%', height: '60%' }}>
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Additional Information
                            </Typography>
                            {/* Add content for the second card here */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
  );
}

export default InvoiceForm;
