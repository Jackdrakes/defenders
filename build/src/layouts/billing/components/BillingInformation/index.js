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

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { useState } from 'react';
import { payFine } from './../../../../api/operations/canteen';
// Billing page components

function BillingInformation() {

  const [cost, setCost] = useState(null);
  const [fine, setFine] = useState(null);

  return (
    <>
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <MDTypography variant="h3" my={0} >Pay Library due</MDTypography>
          <MDTypography variant="body2" my={1}>1 NCU Token ~ 1Rs cash equivalent</MDTypography>
          <MDInput variant="outlined" value={cost }label="Input token amount to send" onChange={evt => setCost(parseInt(evt.target.value))} />
          <MDBox my={1} >
          <MDButton variant="gradient" color="info" onClick={()=> payFine("wallet",cost)} fullWidth>Send</MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
    <br/>
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <MDTypography variant="h3" my={0} >Pay Fine due</MDTypography>
          <MDTypography variant="body2" my={1}>1 NCU Token ~ 1Rs cash equivalent</MDTypography>
          <MDInput variant="outlined" value={fine} label="Input token amount to send" onChange={evt => setFine(parseInt(evt.target.value))}/>
          <MDBox my={1} >
          <MDButton variant="gradient" color="info" onClick={()=> payFine("wallet",fine)} fullWidth>Send</MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
    </>
  );
}

export default BillingInformation;
