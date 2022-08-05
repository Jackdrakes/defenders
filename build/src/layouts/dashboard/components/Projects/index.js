/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import * as React from 'react';
import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { pinataWrapper } from 'api/pinata';

// Data

function Projects() {
  const [data,setData] = useState({});
  const [reciever,setReciever] = useState('');
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Send Achievement NFT
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox my={1} mx={2} >
        <MDInput type="text" label="Send to"  onChange={e=>setReciever(e.target.value)} fullWidth/>
      </MDBox>
      <MDBox my={1} mx={2} >
        <MDInput type="text" label="Name"  onChange={e=>setData({...data,name:e.target.value})} fullWidth/>
      </MDBox>
      <MDBox my={1} mx={2} >
        <MDInput type="text" label="Description"  onChange={e=>setData({...data,description:e.target.value})} fullWidth/>
      </MDBox>
      <MDBox my={1} mx={2} mb={0}>
      <FormControl fullWidth style={{height:"45px"}} >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
          style={{height:"45px"}}
        >
          <MenuItem value={1}>Trophy</MenuItem>
          <MenuItem value={2}>Degree</MenuItem>
          <MenuItem value={3}>Certificate</MenuItem>
        </Select>
      </FormControl>
      </MDBox>
      { age ==2 ?  
            <>
             <MDBox my={1} mx={2} >
               <MDInput type="text" label="Student Name"  onChange={e=>setData({...data,sName:e.target.value})}  fullWidth/>
             </MDBox>
             <MDBox my={1} mx={2} >
               <MDInput type="text" label="Event Name" onChange={e=>setData({...data,event:e.target.value})}  fullWidth/>
             </MDBox>
             <MDBox my={1} mx={2} >
               <MDInput type="text" label="Sports" onChange={e=>setData({...data,sport:e.target.value})}  fullWidth/>
             </MDBox>
             <MDBox my={1} mx={2} >
               <MDInput type="text" label="Position" onChange={e=>setData({...data,sPosition:e.target.value})}  fullWidth/>
             </MDBox>
            </>: 
          age ==3 ?
            <>
            <MDBox my={1} mx={2} >
              <MDInput type="text" label="Student Name"  onChange={e=>setData({...data,sName:e.target.value})}  fullWidth/>
            </MDBox>
            <MDBox my={1} mx={2} >
              <MDInput type="text" label="Course"  onChange={e=>setData({...data,course:e.target.value})}  fullWidth/>
            </MDBox>
            <MDBox my={1} mx={2} >
              <MDInput type="text" label="CGPA"  onChange={e=>setData({...data,cgpa:e.target.value})}  fullWidth/>
            </MDBox>
          </>:
          age ==1 ?
           <>
           <MDBox my={1} mx={2} >
              <MDInput type="text" label="Student Name" onChange={e=>setData({...data,sName:e.target.value})} fullWidth/>
            </MDBox>
            <MDBox my={1} mx={2} >
              <MDInput type="text" label="Position"  onChange={e=>setData({...data,sPosition:e.target.value})}  fullWidth/>
            </MDBox>
            </>
            : <></>
          

          }
      
      <MDBox my={2} mx={2}  >
          <MDButton variant="gradient" color="info" onClick={()=>pinataWrapper(reciever,age,data)} fullWidth>Send</MDButton>
      </MDBox>
    </Card>

  );
}

export default Projects;
