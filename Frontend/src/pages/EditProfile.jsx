import React from "react";
// import ponyreg from "../images/ponyreg.png"
import "../css/editprofile.css"
import { useNavigate } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import GoBackBtn from "../components/gobackbtn";



const sections = [
  {
    title: 'Interested category',
    description: 'select or deselect your interested category'
  },
  {
    title: 'Personal information',
    description: 'modify your username, email, firstname, lastname, phone number, gender, date of birth, profile picture, and bio'
  },
  {
    title: 'Password',
    description: 'change your password by entering the current password and the new one'
  },
];

export default function EditProfile() {
  
  let navigate = useNavigate(); 

  function routeChange(section) { 
    let path = `/editprofile`; 
    if (section === sections[0].title){
        path = `/changecategory`; 
      }
    else if (section === sections[1].title){
        path = `/editpersonal`; 
      }
    else if (section === sections[2].title){
        path = `/changepassword`; 
      }

    navigate(path);
  }

  return (
    <div className="editprofileselection">
    <React.Fragment>
      <GoBackBtn path="./profile"/>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 2, pb: 6 }}>

         <h2 className="editprofilett">Edit Profile</h2>


        <h4 className="editprofilesubtt">Which section of your profile do you want to change?</h4>
      </Container>

      <Container maxWidth="lg" component="main" className="editprofilectn">
        <Grid container spacing={15} alignItems="flex-end" color="">
          {sections.map((section) => (
            <Grid
              item
              key={section.title}
              xs={12}
              sm={6}
              md={4}
            >
              <div className="editprofilecard">
                <h2>{section.title}</h2>
                <p className="sectiondescription">{section.description}</p>
                <p>
                  <button className="profilesectionbtn" onClick={() => routeChange(section.title)}>
                    Edit this section</button></p>
            </div>
           
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
    </div>
  );
}

// export default function EditProfile() {
//   return <EditProfile />;
// }