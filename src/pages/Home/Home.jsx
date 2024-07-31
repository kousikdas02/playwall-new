import { Box, Button, Checkbox, Container, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, List, ListItem, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CheckBoxCheckedIcon from "../../assets/icons/CheckBoxCheckedIcon";
import CheckBoxDefaultIcon from '../../assets/icons/CheckBoxDefaultIcon';
import leftImg from "../../assets/images/left-img.png";
import leftImgMobile from "../../assets/images/left-img-mobile.png";
import logo from "../../assets/images/logo.png";


import { HomeWrapperStyled } from '../../styledComponents/HomeWrapperStyled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';


const Home = () => {
    const [isFocusedFirstName, setIsFocusedFirstName] = useState(false);

    const handleOnFocusFirstName = () => {
        setIsFocusedFirstName(true);
    };
    const handleBlurFirstName = () => {
        setIsFocusedFirstName(false);
    };
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);

    const handleOnFocusEmail = () => {
        setIsFocusedEmail(true);
    };
    const handleBlurEmail = () => {
        setIsFocusedEmail(false);
    };

    const [openTerms, setOpenTerms] = React.useState(false);
    const handleClickOpenTerms = () => {
        setOpenTerms(true);
    };
    const handleCloseTerms = () => {
        setOpenTerms(false);
    };

    const [openPolicy, setOpenPolicy] = React.useState(false);
    const handleClickOpenPolicy = () => {
        setOpenPolicy(true);
    };
    const handleClosePolicy = () => {
        setOpenPolicy(false);
    };

    const [openDataController, setOpenDataController] = React.useState(false);
    const handleClickOpenDataController = () => {
        setOpenDataController(true);
    };
    const handleCloseDataController = () => {
        setOpenDataController(false);
    };


    const [formData, setFormData] = useState({ email: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const handleChange = (e) => {
        setFormData({ email: e.target.value });
    };
    // validate email
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    //Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!checkBox) {
            console.log(checkBox)
            toast.error('Please check the checkbox to submit.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        if (!validateEmail(formData.email)) {
            toast.error('Please enter a valid email.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        setShowLoader(true);
        const data = new FormData();
        data.append('email', formData.email);
        data.append('createdAt', moment().format('MMMM Do YYYY, h:mm:ss a'));
        const Sheet_Url = 'https://script.google.com/macros/s/AKfycby5k415kEPVb99ZdSIhbC7X5fXXPPnZ7UaSqcLDYlrEP5vnHLtkhGT5mONv3keOoAG9/exec';
        try {
            await fetch(Sheet_Url, {
                method: 'POST',
                body: data,
                muteHttpExceptions: true,
            });
            setFormData({
                email: 'SENT!',
            });
            setFormSubmitted(true);
            setShowLoader(false);
        } catch (error) {
            console.log(error);
            setShowLoader(false);
            toast.error('Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
    const handleLogoClick = () => {
        setFormData({
            email: '',
        });
        handleBlurEmail();
        handleBlurFirstName();
        setFormSubmitted(false);
        setCheckBox(false);
    }
    const [checkBox, setCheckBox] = useState(false);
    const handleCheckBoxChange = (e) => {
        setCheckBox(e.target.checked);
    }
    return (
        <HomeWrapperStyled>
            <Box className="homeInner">

                <Box className="homeMain">
                    <Box className="mobileLogoOuter" sx={{ display: { xs: 'block', md: 'none' } }}>
                        <Container maxWidth={false} >
                            <Box className="mobileLogoWrap">
                                <Link to="/" onClick={handleLogoClick} className='mobileLogo'>
                                    <img src={logo} alt="" />
                                </Link>
                            </Box>
                        </Container>
                    </Box>
                    <Box className='imageColumn_Mobile' sx={{ display: { xs: 'block', md: 'none' } }}>
                                        <figure>
                                            <img src={leftImgMobile} alt="" />
                                        </figure>
                                    </Box>
                    <Container maxWidth={false}>
                        <Grid container rowSpacing={2.5} columnSpacing={4} >
                            <Grid item xs={12} md={6} lg={6.8} sx={{ display: { md: 'block', xs: 'none' } }}>
                                <Box className='imageColumn'>
                                    <figure>
                                        <img src={leftImg} alt="" />
                                    </figure>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={5.2}>
                                <Box className="homeMainConent">
                                    <Box className="desktopLogoWrap" sx={{ display: { md: 'flex', xs: 'none' } }}>
                                        <Link to="/" onClick={handleLogoClick} className='desktopLogo'>
                                            <img src={logo} alt="" />
                                        </Link>
                                    </Box>

                                    

                                    <Box className="homeMainConent_heading">

                                        <Typography variant='h1'>
                                            Join PlayWall now!
                                        </Typography>


                                    </Box>
                                    <Box className="homeForm">

                                        <form onSubmit={handleSubmit} autoComplete='off'>
                                            <Box className="homeFormInputWrap">

                                                <Box className="homeFormInput">
                                                    <TextField disabled={showLoader} onFocus={handleOnFocusFirstName} onBlur={handleBlurFirstName} inputProps={{ readOnly: formSubmitted }} fullWidth placeholder='FIRST NAME' variant="outlined" value={formData.email} onChange={handleChange} className={`${formSubmitted === true ? "formSubmitted" : ""} ${isFocusedFirstName === true ? "focused" : ""}`} />


                                                </Box>
                                                <Box className="homeFormInput">
                                                    <TextField disabled={showLoader} onFocus={handleOnFocusEmail} onBlur={handleBlurEmail} inputProps={{ readOnly: formSubmitted }} fullWidth placeholder='EMAIL ADDRESS' variant="outlined" value={formData.email} onChange={handleChange} className={`${formSubmitted === true ? "formSubmitted" : ""} ${isFocusedEmail === true ? "focused" : ""}`} />
                                                </Box>
                                            </Box>

                                            <Box className="homeFormBotrap">
                                                <Typography variant='h6' className='checkBoxTtitle'>
                                                    Check all the boxes that show what interests you about PlayWall.
                                                </Typography>

                                                <Box className="checboxWrapper">
                                                    <FormControlLabel className='checkBoxFormControl' onChange={handleCheckBoxChange} control={<Checkbox icon={<CheckBoxDefaultIcon />} checkedIcon={<CheckBoxCheckedIcon />} />} label="I want to keep hearing about the PlayWall and receive updates" />
                                                    <FormControlLabel className='checkBoxFormControl' onChange={handleCheckBoxChange} control={<Checkbox icon={<CheckBoxDefaultIcon />} checkedIcon={<CheckBoxCheckedIcon />} />} label="I'm interested in developing/reselling partnerships" />
                                                    <FormControlLabel className='checkBoxFormControl' onChange={handleCheckBoxChange} control={<Checkbox icon={<CheckBoxDefaultIcon />} checkedIcon={<CheckBoxCheckedIcon />} />} label="I would like to see a demo and/or buy PlayWall" />
                                                    <FormControlLabel className='checkBoxFormControl' onChange={handleCheckBoxChange} control={<Checkbox icon={<CheckBoxDefaultIcon />} checkedIcon={<CheckBoxCheckedIcon />} />} label="I am interested in using it for my upcoming event" />

                                                </Box>

                                                <Box className="formSubmitBtnWrap">

                                                    {/* <Button className="formSubmittedBtn formSubmitBtnCommon" disabled>
                                                    <CircularProgress style={{ color: "#000" }} size={23} />
                                                </Button> */}


                                                    <Button type='submit' className='formSubmitBtnCommon'>
                                                        SIGN UP
                                                    </Button>

                                                    {/* <Button className="formSubmittedBtn formSubmitBtnCommon" disabled>
                                                    SENT !
                                                </Button> */}
                                                </Box>
                                            </Box>


                                        </form>

                                    </Box>
                                </Box>
                            </Grid>

                        </Grid>
                    </Container>

                </Box>
                <Box className="footer">
                    <Container maxWidth={false}>
                        <Typography variant='body1'>
                            By signing up you agree to receive the Service Provider's offer, information about new products, services, promotional activities, and the Service Provider's activities, and you subscribe to the Newsletter service. You accept the content of the <Typography variant='caption' className='footerLink' onClick={handleClickOpenTerms}>Newsletter Terms and Conditions</Typography> and the applicable <Typography variant='caption' className='footerLink' onClick={handleClickOpenPolicy}>Privacy Policy</Typography>. The above consent can be withdrawn at any time by clicking the unsubscribe button included in every email sent to you under this consent. The administrator of your personal data is KEZERK spółka z ograniczoną odpowiedzialnością with its registered office in Gdańsk, ul. Partyzantów 61A/3, 80-254 Gdańsk, KRS: 0000928014. Read more about the <Typography variant='caption' className='footerLink' onClick={handleClickOpenDataController}>Data Controller</Typography>. 2024 PlayWall. All rights reserved
                        </Typography>
                    </Container>
                </Box>
                {/* </Container> */}
            </Box>

            {/* terms and conditions modal */}
            <Dialog
                open={openTerms}
                onClose={handleCloseTerms}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                PaperProps={{
                    style: {
                        background: 'linear-gradient(135.19deg, rgb(180, 0, 255) -50%, rgba(0, 0, 0, 0) 100%) left top / cover no-repeat rgb(0, 0, 0)',
                        backgroundColor: '#000',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                    }
                }}
            >
                <DialogTitle>Terms and Conditions</DialogTitle>
                <DialogContent dividers className='cmnModalConent'>
                    <Typography variant='h5'>
                        1 Definitions
                    </Typography>
                    <List>
                        <ListItem>
                            <b>Website</b> – the website in the domain <Link to={"//playwall.co"} target='_blank'>www.playwall.co</Link> to which the Service Provider has rights;
                        </ListItem>
                        <ListItem>
                            <b>Service Provider</b> – KEZERK spółka z ograniczoną odpowiedzialnością with its registered office in Gdańsk, Partyzantów 61A/3, 80-254 Gdańsk, registered in the Register of Entrepreneurs of the National Court Register under number 0000928014, NIP: 5833438444, REGON: 52024229000000;

                        </ListItem>
                        <ListItem>
                            <b>User</b> – a natural person with full legal capacity who uses the Services of the Website;

                        </ListItem>
                        <ListItem>
                            <b>Service</b> – a service provided electronically involving the sending and receiving of data by public telecommunication systems upon the individual request of the User, without the simultaneous physical presence of the parties;
                        </ListItem>
                        <ListItem>
                            <b>Newsletter</b> – a service consisting of the periodic sending by the Service Provider to the User's email address of electronic messages that may contain information about products, services, news, promotions, updates, and other information related to the Service Provider's activities;

                        </ListItem>
                        <ListItem>
                            <b>Consumer</b> – a natural person who enters into a contract not directly related to their business or professional activity;
                        </ListItem>
                        <ListItem>
                            <b>Entrepreneur with Consumer Rights (KPPUK)</b> – a natural person who enters into a contract directly related to their business activity when the contract indicates that it does not have a professional nature for them, particularly based on the subject of their business activity made available based on the regulations on the Central Register and Information on Economic Activity;

                        </ListItem>
                        <ListItem>
                            <b>Entrepreneur</b> – a natural person, legal person, or organizational unit without legal personality, to which the law grants legal capacity, conducting business or professional activity in their own name and performing legal actions related directly to their business or professional activity;
                        </ListItem>
                        <ListItem>
                            <b>Regulations</b> – these regulations.
                        </ListItem>
                    </List>

                    <Typography variant='h5'>
                        2 General Provisions
                    </Typography>
                    <Typography variant='body1'>These regulations set out the rules for the provision of the digital content delivery contract through the Newsletter service and are referred to as "Regulations." The User may contact the Service Provider at:</Typography>
                    <List>
                        <ListItem>
                            The registered office address: Partyzantów 61A/3, 80-254 Gdańsk;
                        </ListItem>
                        <ListItem>
                            Email address: contact@playwall.co

                        </ListItem>
                    </List>


                    <Typography variant='h5'>
                        3 Terms of Service Use
                    </Typography>
                    <Typography variant='body1'>
                        To use the Newsletter service, it is necessary to:

                    </Typography>
                    <List>
                        <ListItem>
                            Have an electronic device with an operating system (e.g., laptop, phone);
                        </ListItem>
                        <ListItem>
                            Access the internet through one of the web browsers (current version supporting cookies, e.g., Opera, Safari, Google Chrome);
                        </ListItem>
                        <ListItem>
                            Have a properly configured email address.
                        </ListItem>
                    </List>
                    <Typography variant='body1'>
                        Providing the Newsletter Service involves the transmission of data via the Internet, which entails the risk of system infection. The Service Provider uses technical and organizational measures to ensure that using the Newsletter Service is safe; however, it is recommended that the User uses protections such as antivirus software.

                    </Typography>
                    <Typography variant='body1'>
                        The Newsletter service involves sending by the Service Provider to the email address provided by the User information in the form of an electronic letter (email) containing commercial and marketing information, including the Service Provider's offer, information about new products, services, and promotional activities.

                    </Typography>
                    <Typography variant='body1'>
                        The Service Provider sends Newsletters to Users at a frequency determined by the Service Provider. Subscription to the Newsletter is voluntary and requires the User's consent and acceptance of these Regulations. Failure to give such consent or its withdrawal will prevent the further provision of the Newsletter Service. It is prohibited to provide unlawful content by Users when using the Newsletter subscription form, including SPAM. The Newsletter service is provided free of charge in exchange for providing the User's personal data in the form of an email address. To use the Newsletter service, the User must provide their email address in the registration form for the Newsletter available on the website.

                    </Typography>
                    <Typography variant='body1'>
                        If you want to purchase the Newsletter Service for a fee, you can contact the Service Provider at the email address provided in §1 of the Regulations. The price of digital content sent as part of the Newsletter Service is determined individually through email correspondence.
                    </Typography>
                    <Typography variant='body1'>
                        After pressing the button expressing the will to subscribe to the Newsletter service, an email with a link confirming the will to subscribe to the Newsletter service will be sent to the email address provided by the User. By clicking the button expressing the will to subscribe to the Newsletter service, the User agrees to receive commercial and marketing information at the provided email address.
                    </Typography>
                    <Typography variant='body1'>
                        When the subscription is confirmed through the activation link, the User's email address will be added to the mailing list. This email will be used to send the User commercial and direct marketing information until they unsubscribe. The Agreement for the provision of the Newsletter Service is concluded when the User receives an email confirming the subscription to the Newsletter Service.
                    </Typography>
                    <Typography variant='body1'>
                        The User may unsubscribe from the Newsletter service at any time and without giving any reason. Unsubscription can be done:
                    </Typography>
                    <List>
                        <ListItem>
                            By clicking the "If you do not want to receive messages from us, click here" button located in each email sent as part of this Service;

                        </ListItem>
                        <ListItem>
                            By sending an unsubscription request electronically to the email address: contact@playwall.co

                        </ListItem>
                    </List>
                    <Typography variant='body1'>
                        Upon unsubscribing from the Newsletter Service, the agreement is terminated. The Service Provider reserves the right to temporarily or permanently discontinue the provision of the Newsletter Service at any time. The Service Provider will inform Users about the discontinuation of Services via email.
                    </Typography>
                    <Typography variant='h5'>
                        4 Copyright
                    </Typography>
                    <Typography variant='body1'>
                        The information sent as part of the Newsletter Service constitutes works within the meaning of copyright law and is protected. Any copying, duplicating, modifying, and using them contrary to their purpose without the Service Provider's consent is prohibited and may constitute a violation of applicable regulations.

                    </Typography>
                    <Typography variant='body1'>
                        Using the content of the Newsletter is allowed only for personal use. Using the Service Provider's content for commercial purposes, promoting competitive activities, or any other commercial or non-commercial activity without the Service Provider's consent is prohibited.

                    </Typography>
                    <Typography variant='body1'>
                        The Service Provider grants the User a non-exclusive and non-transferable license, without the right to grant sublicenses, to use the content of the Newsletter for personal use in the following fields of exploitation:
                    </Typography>
                    <List>
                        <ListItem>
                            Recording the work using digital technology and storing it through digital processing;

                        </ListItem>
                        <ListItem>
                            Printing for personal use.

                        </ListItem>
                    </List>
                    <Typography variant='body1'>
                        The license mentioned in paragraph 3 lasts throughout the period of the User's use of the Newsletter Service, i.e., from the date of concluding the Agreement for the provision of the Newsletter Service until its termination.

                    </Typography>
                    <Typography variant='h5'>
                        5 Personal Data Protection
                    </Typography>
                    <Typography variant='body1'>
                        The data controller of the data collected as part of the use of the Newsletter service is KEZERK spółka z ograniczoną odpowiedzialnością with its registered office in Gdańsk, Partyzantów 61A/3, 80-254 Gdańsk, registered in the Register of Entrepreneurs of the National Court Register under number 0000928014, NIP: 5833438444, REGON: 52024229000000.

                    </Typography>
                    <Typography variant='body1'>
                        Users' personal data will be processed to fulfill the Newsletter Service ordered by the User based on Art. 6(1)(b) of the General Data Protection Regulation (GDPR) and based on Art. 6(1)(f) GDPR in conjunction with Art. 10(2) of the Act of July 18, 2002, on the provision of electronic services and Art. 172 of the Act of July 16, 2004, Telecommunications Law.

                    </Typography>
                    <Typography variant='body1'>
                        Users' personal data will be processed in accordance with the Administrator's Privacy Policy available on the Website in the "Privacy Policy" tab.

                    </Typography>

                    <Typography variant='h5'>
                        6 Complaints
                    </Typography>
                    <Typography variant='body1'>
                        The Service Provider is responsible for ensuring the compliance of the Newsletter service with these Regulations. The User has the right to file complaints regarding the use of the Newsletter service. To do this, contact the Service Provider at:

                    </Typography>
                    <List>
                        <ListItem>
                            The registered office address: Partyzantów 61A/3, 80-254 Gdańsk;

                        </ListItem>
                        <ListItem>
                            Email address: contact@playwall.co

                        </ListItem>
                    </List>
                    <Typography variant='body1'>
                        The complaint should include:

                    </Typography>
                    <List>
                        <ListItem>
                            The User's email address to which the Newsletter is sent;

                        </ListItem>
                        <ListItem>
                            A description of the issue the complaint relates to;

                        </ListItem>
                        <ListItem>
                            The preferred way to inform about the resolution of the complaint;

                        </ListItem>
                        <ListItem>
                            Contact details for preferred communication regarding the resolution of the complaint.

                        </ListItem>
                    </List>
                    <Typography variant='body1'>
                        Complaints will be resolved within 14 days from the date of receipt.
                    </Typography>
                    <Typography variant='body1'>
                        Consumers have the option to use the following out-of-court dispute resolution methods and complaint handling:

                    </Typography>
                    <List>
                        <ListItem>
                            Submitting a request for out-of-court resolution of consumer disputes under the Act of September 23, 2016, on out-of-court resolution of consumer disputes;

                        </ListItem>
                        <ListItem>
                            Requesting a case to be considered by the Permanent Consumer Arbitration Court operating at the relevant Voivodeship Inspectorate of Trade Inspection;

                        </ListItem>
                        <ListItem>
                            Seeking assistance from the Municipal Consumer Ombudsman in protecting consumer rights and interests. Free assistance to consumers in protecting their rights and interests is also provided by social organizations such as the Polish Consumers Association.
                        </ListItem>
                    </List>
                    <Typography variant='body1'>
                        Consumers have the option to use the out-of-court dispute resolution and complaint handling before the Permanent Consumer Arbitration Court at the relevant Voivodeship Inspector of Trade Inspection. Information on how to access the above mode and procedures for dispute resolution can be found at <Link to={"//uokik.gov.pl/"} target="_blank">www.uokik.gov.pl</Link> in the "Consumer Dispute Resolution" section. Consumers also have the option to use the EU online dispute resolution platform available at: ec.europa.eu/consumers/odr.

                    </Typography>
                    <Typography variant='h5'>
                        7 Final Provisions
                    </Typography>
                    <Typography variant='body1'>
                        In matters not regulated by these Regulations, the relevant provisions of generally applicable law shall apply. These Regulations are effective from July 5, 2024. The Service Provider reserves the right to amend the Regulations for important reasons. Important reasons include, in particular:
                    </Typography>
                    <List>
                        <ListItem>
                            Changes in generally applicable Polish or EU laws that require adjusting the provisions of these Regulations to those regulations;

                        </ListItem>
                        <ListItem>
                            Introducing new functionalities on the Website;

                        </ListItem>
                        <ListItem>
                            Enhancing User security;
                        </ListItem>
                        <ListItem>
                            Preventing abuses related to the use of the Website;

                        </ListItem>
                        <ListItem>
                            Expanding or changing the offer;

                        </ListItem>
                        <ListItem>
                            Changes in technology or technical infrastructure;

                        </ListItem>
                        <ListItem>
                            Changes in business strategy;

                        </ListItem>
                        <ListItem>
                            Changes in relations with contractors or suppliers;

                        </ListItem>
                        <ListItem>
                            Responding to competitor actions and market trends;

                        </ListItem>
                        <ListItem>
                            Crises and extraordinary situations.
                        </ListItem>
                    </List>

                    <Typography variant='body1'>
                        The Service Provider will inform Users about changes to the Regulations by placing information about the change on the main page of the Website and sending information to the provided email address. If the change in the Regulations does not affect the rights and obligations of the Users, the Regulations come into force 14 days from the date of publishing the information on the Website. If the changes in the Regulations affect the rights and obligations of the Users resulting from the use of the Newsletter Service, the Regulations come into force 30 days from the date of notification about the change in the Regulations. If the User does not submit a statement of termination of the Agreement within these 30 days, the service is continued under the new Regulations for an indefinite period. The above situation does not apply to Consumers and KPPUK, for whom the Service Provider will be obliged to obtain acceptance of the new Regulations. If the Consumer or KPPUK does not express such consent within 30 days, the agreement is terminated at the end of this period. The law applicable to resolving any disputes arising from these Regulations is Polish law. In the case of disputes that need to be resolved through legal proceedings, the competent court is:
                    </Typography>
                    <List>
                        <ListItem>
                            For Entrepreneurs - the court competent for the registered office of the Service Provider;

                        </ListItem>
                        <ListItem>
                            For Consumers and KPPUK - the court competent according to general jurisdiction.

                        </ListItem>
                    </List>


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseTerms}>Close</Button>
                </DialogActions>
            </Dialog>
            {/* policy modal */}
            <Dialog
                open={openPolicy}
                onClose={handleClosePolicy}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                PaperProps={{
                    style: {
                        background: 'linear-gradient(135.19deg, rgb(180, 0, 255) -50%, rgba(0, 0, 0, 0) 100%) left top / cover no-repeat rgb(0, 0, 0)',
                        backgroundColor: '#000',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                    }
                }}
            >
                <DialogTitle>Privacy Policy</DialogTitle>
                <DialogContent dividers>

                    <Typography variant='body1'>
                        This Privacy Policy applies to the processing and protection of personal data of Users in connection with the use of the <Link to={"//signup.playwall.co"} target='_blank'>www.signup.playwall.co</Link> website.
                    </Typography>
                    <Typography variant='body1'>
                        Our primary goal is to ensure the privacy protection of the Users of the Website at a level at least corresponding to the standards set out in the applicable legal regulations, in particular the Act of July 18, 2002 on the provision of electronic services, the Regulation of the European Parliament and of the Council (EU) 2016/679 of April 27, 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation) - GDPR.
                    </Typography>
                    <Typography variant='body1'>
                        Anyone who uses the Website remains anonymous until they decide to disclose their identity. The data controller processes personal data based on consent, where consent is also understood as ticking the appropriate checkbox or any other behavior that clearly indicates acceptance of the proposed processing.
                    </Typography>
                    <Typography variant='body1'>
                        The Website and the Administrator's services are not intended for children under 18 years of age nor directed at them. If you do not accept the content of this Policy, immediately cease using the Website.
                    </Typography>
                    <Typography variant='h5'>
                        Definitions
                    </Typography>

                    <List>
                        <ListItem>
                            <b>Website</b> – the website at <Link to={"//signup.playwall.co"} target='_blank'>www.signup.playwall.co</Link> provided by the Service Provider to offer specific services, content, or functionalities for Users;

                        </ListItem>
                        <ListItem>
                            <b>Administrator</b> – KEZERK spółka z ograniczoną odpowiedzialnością with its registered office in Gdańsk, Partyzantów 61A/3, 80-254 Gdańsk, registered in the Register of Entrepreneurs of the National Court Register under number 0000928014, NIP: 5833438444, REGON: 52024229000000;
                        </ListItem>
                        <ListItem>
                            <b>User</b> – a natural person with full legal capacity who uses the Website Services;

                        </ListItem>
                        <ListItem>
                            <b>GDPR</b> – Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC;

                        </ListItem>
                        <ListItem>
                            <b>Personal data (or "data")</b> – any information relating to an identified or identifiable natural person;

                        </ListItem>
                        <ListItem>
                            <b>President of the Personal Data Protection Office ("PUODO")</b> – the personal data protection authority supervising compliance with data protection regulations;

                        </ListItem>
                        <ListItem>
                            <b>Identifiable natural person</b> – a person who can be identified directly or indirectly, in particular by reference to an identifier such as a name, identification number, location data, online identifier, or one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person; information is not considered to allow identification if it would require excessive time, cost, or effort;
                        </ListItem>
                        <ListItem>
                            <b>Processing of data</b> – any operation or set of operations performed on personal data, such as collecting, recording, organizing, structuring, storing, adapting or altering, retrieving, consulting, using, disclosing by transmission, disseminating or otherwise making available, aligning or combining, restricting, erasing or destroying, particularly those performed in information systems;

                        </ListItem>
                        <ListItem>
                            <b>Purpose of processing</b> – the reason why personal data are collected and processed;

                        </ListItem>
                        <ListItem>
                            <b>Consent</b> – a freely given, specific, informed, and unambiguous indication of the User's wishes by which they, by a statement or by a clear affirmative action, signify agreement to the processing of personal data relating to them;

                        </ListItem>
                        <ListItem>
                            <b>Right of access</b> – the User's right to obtain from the Administrator confirmation as to whether or not personal data concerning them are being processed, and, where that is the case, access to the personal data;

                        </ListItem>
                        <ListItem>
                            <b>Right to rectification</b> – the User's right to obtain from the Administrator without undue delay the rectification of inaccurate personal data concerning them;

                        </ListItem>
                        <ListItem>
                            <b>Right to erasure (right to be forgotten)</b> – the User's right to obtain from the Administrator the erasure of personal data concerning them without undue delay, under certain conditions;

                        </ListItem>
                        <ListItem>
                            <b>Right to data portability</b> – the User's right to receive the personal data concerning them, which they have provided to the Administrator, in a structured, commonly used, and machine-readable format, and have the right to transmit those data to another controller.
                        </ListItem>

                    </List>


                    <Typography variant='h5'>
                        Who is the Administrator of my personal data?

                    </Typography>
                    <Typography variant='body1'>The Administrator of your personal data is KEZERK spółka z ograniczoną odpowiedzialnością with its registered office in Gdańsk, Partyzantów 61A/3, 80-254 Gdańsk, registered in the Register of Entrepreneurs of the National Court Register under number 0000928014, NIP: 5833438444, REGON: 52024229000000. You can contact the Administrator regarding your personal data at the e-mail address: contact@playwall.co</Typography>
                    <Typography variant='h5'>
                        Legal bases and purposes of data processing

                    </Typography>
                    <Typography variant='body1'>
                        The legal bases and purposes of data processing depend on the type of Services you use:
                    </Typography>
                    <Typography variant='h6'>
                        Service
                    </Typography>
                    <Typography variant='body1'>
                        Direct marketing and sending commercial information (Newsletter)
                    </Typography>
                    <Typography variant='h6'>
                        Legal Basis
                    </Typography>
                    <Typography variant='body1'>
                        Art. 6(1)(f) GDPR – legitimate interest in sending commercial information and direct marketing with the prior consent of the User. Providing personal data is voluntary but necessary to use the newsletter service.
                    </Typography>
                    <Typography variant='h6'>
                        Purpose of Processing
                    </Typography>
                    <Typography variant='body1'>
                        Sending commercial and marketing information via email (Newsletter).
                    </Typography>
                    <Typography variant='h6'>
                        Data Retention Period
                    </Typography>
                    <Typography variant='body1'>
                        We will send you the Newsletter until you unsubscribe.
                    </Typography>
                    <Typography variant='h6'>
                        Handling complaints
                    </Typography>
                    <Typography variant='body1'>
                        Art. 6(1)(c) GDPR – legal obligation under the Act of April 23, 1964, and the Act of May 30, 2014, on consumer rights. Providing personal data is necessary to handle the complaint. Failure to provide data will result in the inability to handle the complaint.
                    </Typography>
                    <Typography variant='h6'>
                        Handling complaints
                    </Typography>
                    <Typography variant='body1'>
                        After handling the inquiry or complaint, we store the data for no longer than three years unless the nature of the inquiry requires a longer data retention period.
                    </Typography>
                    <Typography variant='h6'>
                        Contact
                    </Typography>
                    <Typography variant='body1'>
                        Art. 6(1)(f) GDPR – legitimate interest in maintaining contact with potential clients and responding to inquiries. Providing personal data is voluntary but necessary to establish contact. Failure to provide data will prevent a response.
                    </Typography>
                    <Typography variant='h6'>
                        Handling inquiries and responses, arranging meetings.
                    </Typography>
                    <Typography variant='body1'>
                        Data will be processed for two years.
                    </Typography>

                    <Typography variant='body1'>
                        The periods indicated above are calculated from the end of the year in which the Administrator started processing the data to facilitate technical control of these periods. After this time, personal data will be permanently destroyed or deleted unless further retention is required by applicable laws.
                    </Typography>
                    <Typography variant='h5'>
                        To whom do we transfer your personal data?

                    </Typography>
                    <Typography variant='body1'>
                        The Administrator may transfer your personal data to the following categories of recipients:
                    </Typography>

                    <List>
                        <ListItem>
                            Companies providing technical and IT support, including website and email hosting (…..);
                        </ListItem>
                        <ListItem>
                            Companies providing the newsletter system (…….)
                        </ListItem>
                    </List>

                    <Typography variant='body1'>
                        All external entities may use your data only to provide a specific service. All persons with access to your data must process it with caution and comply with applicable regulations. We do not transfer your data to third parties for commercial purposes, nor do we sell your data to other companies.
                    </Typography>
                    <Typography variant='body1'>
                        The Website may disclose personal data to authorized authorities, tax authorities, and/or law enforcement agencies if required by law.
                    </Typography>
                    <Typography variant='h5'>
                        Transfer of data to third countries
                    </Typography>
                    <Typography variant='body1'>
                        The Administrator transfers your personal data outside the EEA only when necessary and resulting from the use of the services of internationally operating companies. Service providers must ensure the same level of protection and apply appropriate legal mechanisms to protect personal data, such as binding corporate rules adopted by the competent supervisory authority or other international certification standards or standard contractual clauses specified by the European Commission.

                    </Typography>
                    <Typography variant='body1'>
                        These companies guarantee compliance with standards equivalent to the GDPR. The Website's use of their technologies in processing personal data remains lawful. More information on data transfers outside the EEA can be found at: <Link to={"//commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_pl"} target='_blank'>https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_pl</Link>
                    </Typography>
                    <Typography variant='h5'>
                        Users' rights
                    </Typography>
                    <Typography variant='body1'>
                        Users have the right to request from the Administrator:
                    </Typography>
                    <List>
                        <ListItem>
                            Access to their personal data – every person using this right has the right to receive information on whether and what information the Administrator processes about them, as well as to obtain a free copy of the data.
                        </ListItem>
                        <ListItem>
                            Rectification of data – every person using this right has the right to request the correction of their data or their update.
                        </ListItem>
                        <ListItem>
                            Restriction of processing – every person using this right has the right to restrict the processing of their data in case of questioning the accuracy of the data, and the legality or necessity of processing, and objecting to the processing.
                        </ListItem>
                        <ListItem>
                            Withdrawal of consent for data processing – every person using this right has the right to withdraw their previously given consent for the processing of data for purposes specified by the consent. The withdrawal is not retroactive, meaning that data processing before the withdrawal remains legal. Note! This right applies only to data processing based on the User's consent.
                        </ListItem>
                        <ListItem>
                            Objection – every person using this right will be able to object to the processing of their data based on the legitimate interest of the Administrator.
                        </ListItem>
                        <ListItem>
                            Data portability – every person using this right will be able to request the transfer of their data in pdf format to a specified Administrator.

                        </ListItem>

                    </List>

                    <Typography variant='body1'>
                        In addition to the rights mentioned above, every person whose data is processed has the right to file a complaint with the President of the Personal Data Protection Office if they believe that their data is processed unlawfully. The complaint is filed with the President of the Personal Data Protection Office, ul. Stawki 2, 00-193 Warsaw, or via the form on the website: <Link to={"//uodo.gov.pl/"} target='_blank'>https://uodo.gov.pl/</Link>

                    </Typography>
                    <Typography variant='body1'>
                        You can exercise the rights specified in point 1 by contacting us via the contact details, e.g., email: contact@playwall.co. The Administrator will implement the rights through contact at the Administrator's email address within 30 days of receiving the request. If, due to the particular nature or complexity of the case, this is not possible within the 30-day period, the Administrator will implement them within the next month, informing the entitled party of the extension immediately.
                    </Typography>
                    <Typography variant='body1'>
                        To ensure security, we reserve the right to provide certain known information. By using such a process, we can verify whether it is really about the person to whom the data relates.

                    </Typography>
                    <Typography variant='body1'>
                        The Administrator has the right to refuse to implement the rights mentioned above only if it is lawful and due to overriding grounds over the interests of the entitled party. The Administrator will inform the entitled party of the reasons for refusing to fulfill the request.
                    </Typography>
                    <Typography variant='h5'>
                        Automated decision-making and profiling
                    </Typography>
                    <Typography variant='body1'>
                        The Administrator observes Users' behavior by analyzing traffic on the Website and the history of activity on the Website. Data analysis does not cause any legal effects or affect the rights and freedoms of the User, and these data are processed only to determine the preferences of Users and tailor the content and offers created by the Administrator to the preferences of Users.
                    </Typography>
                    <Typography variant='h5'>Cookies</Typography>
                    <Typography variant='body1'>
                        The Website uses cookies, which are small text-numeric files saved by the telecommunication system in the User's telecommunication system (on a computer, phone, or another device from which the connection to the Website was made) while browsing the Website and allow later identification of the User when reconnecting to the Website from the device on which they were saved (e.g., computer, phone).
                    </Typography>
                    <Typography variant='body1'>
                        The Administrator may use the following types of cookies:
                    </Typography>
                    <List>
                        <ListItem>
                            <b>Functional cookies</b> – exist on the computer only while staying on a given website – more precisely, until the browser is closed. They allow the Website to remember what Users chose on the previous page and are aimed at optimizing navigation on the Website, e.g., by remembering the settings of the logged-in User on the Website – so the user does not have to re-enter data on each subpage of the Website.
                        </ListItem>
                        <ListItem>
                            <b>Necessary cookies</b> – installed by the Administrator through the Website to provide Users with services offered on the site and ensure their proper functioning.
                        </ListItem>
                        <ListItem>
                            <b>Analytical cookies</b> – this type of cookie is used to provide important information about website traffic and how visitors use it. These cookies are only used to collect traffic statistics and determine the User's profile to display tailored materials in advertising networks.
                        </ListItem>
                        <ListItem>
                            <b>Marketing cookies</b> – installed by the Administrator or third parties whose services the Administrator uses to tailor displayed marketing content to Users' preferences.
                        </ListItem>

                    </List>
                    <Typography variant='body1'>
                        No information constituting personal data of the Users of the Website is stored in cookies. Cookies are not used to determine the User's identity. The legal basis for the use of cookies is the Administrator's legitimate interest.
                    </Typography>
                    <Typography variant='body1'>
                        Cookies placed on the User's end device by the Website may also be used by advertisers and partners cooperating with the Administrator and by advertising networks, particularly the Google network, to display advertisements tailored to the way the User uses the Website. To this end, they may retain information about the User's navigation path or the time spent on a particular page.
                    </Typography>
                    <Typography variant='body1'>
                        The Administrator analyzes the browsing history of the Website and traffic on the site in an automated manner. Data analysis does not cause any legal effects for Users and is only intended to tailor the content presented by the Administrator to the Users' preferences.
                    </Typography>
                    <Typography variant='body1'>
                        Cookies are used on the Website with the User's consent. The User can express consent by setting the software, particularly the web browser installed on the telecommunication device used by the User to browse the Website.
                    </Typography>
                    <Typography variant='body1'>
                        The User can at any time withdraw or change the scope of the previously given consent to the use of cookies on the Website and delete them from their browser. The User can also at any time limit or disable cookies in their browser by setting it to block cookies or warn the User before saving a cookie on the device used to browse the Website. In such a case, however, it may happen that the User will not be able to use all the functionalities of the Website.
                    </Typography>
                    <Typography variant='h5'>How do we protect your personal data?</Typography>
                    <Typography variant='body1'>
                        The Administrator does everything to ensure your data is safe. To this end, appropriate technical and organizational measures are implemented to ensure that processing is carried out in compliance with the law and in a manner that ensures security, including, among others, using encrypted connections - SSL (https protocol) and protective solutions against a range of internet threats, including DDoS attacks, hacking, or phishing.
                    </Typography>
                    <Typography variant='h5'>Where can I report complaints/concerns about personal data processing?</Typography>
                    <Typography variant='body1'>
                        We would like to emphasize that your privacy is important to us, and we take all possible steps to protect your data. If you have any questions or concerns about the processing of your data on our Website, please contact us at: via email: contact@playwall.co
                    </Typography>
                    <Typography variant='h5'>Final provisions</Typography>
                    <Typography variant='body1'>
                        The Administrator applies technical and organizational measures to ensure the protection of processed personal data appropriate to the threats and category of data protected, particularly to protect data from being disclosed to unauthorized persons, taken by an unauthorized person, processed in violation of applicable regulations, and changed, lost, damaged, or destroyed.
                    </Typography>
                    <Typography variant='body1'>
                        The Administrator reserves the right to change the Privacy Policy for important reasons (such as changes in generally applicable laws, the introduction of new functionalities, system modifications). The Administrator will inform Users of any changes to the Privacy Policy by posting information about the change on the Website's main page. Users subscribed to the Newsletter Service will also be notified by the Administrator by sending information about the change to the email address provided in the registration form.

                    </Typography>
                    <Typography variant='body1'>
                        The change in the Privacy Policy takes effect 14 days from the date of its publication on the Website.

                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePolicy}>Close</Button>
                </DialogActions>
            </Dialog>

            {/* data controller modal */}
            <Dialog
                open={openDataController}
                onClose={handleCloseDataController}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                PaperProps={{
                    style: {
                        background: 'linear-gradient(135.19deg, rgb(180, 0, 255) -50%, rgba(0, 0, 0, 0) 100%) left top / cover no-repeat rgb(0, 0, 0)',
                        backgroundColor: '#000',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                    }
                }}
            >
                <DialogTitle>Data Controller Information</DialogTitle>
                <DialogContent dividers>

                    <Typography variant='body1'>
                        The controller of your personal data is KEZERK spółka z ograniczoną odpowiedzialnością with its registered office in Gdańsk, Partyzantów 61A/3, 80-254 Gdańsk, registered in the National Court Register under number 0000928014. You can contact the Data Controller at the email address: contact@playwall.co. Your personal data provided in the form will be processed based on Article 6(1)(b) of the GDPR, i.e., for the purpose of performing the Newsletter service agreement. You have the right to access your data, rectify data, delete data, restrict processing, object to processing, and data portability. You also have the right to file a complaint with the President of the Personal Data Protection Office if you believe that your data is being processed unlawfully.

                    </Typography>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDataController}>Close</Button>
                </DialogActions>
            </Dialog>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </HomeWrapperStyled >
    )
}

export default Home