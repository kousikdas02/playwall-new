import { Box, styled } from "@mui/material";

export const HomeWrapperStyled = styled(Box)`
    .MuiContainer-root {
        padding: 0 60px;
        @media (max-width: 899px) {
            padding: 0 32px;
        }
        @media (max-width: 599px) {
            padding: 0 43px;
        }
        @media (max-width: 374px) {
            padding: 0 20px;
        }
    }
   
    .homeForm{
       

        .MuiInputBase-root {
            .MuiOutlinedInput-notchedOutline {
                display: none;
            }
    
            .MuiInputBase-input {
                color: rgba(0, 255, 130, 1);
                font-size: 14px;
                letter-spacing: 0.025em;
                font-family: "Encode Sans", sans-serif;
                padding: 14px 16px;
                border-radius: 4px;
                border: 1px solid #767676;
                font-weight: 400;
                transition: 0.3s all ease;
                line-height: 20px;
               
    
                    ::-webkit-input-placeholder {
                        color: #00FF82;
                        opacity: .6;
                    }
                    ::-moz-placeholder {
                        color: #00FF82;
                        opacity: .6;
                    }
    
                    :-ms-input-placeholder {
                        color: #00FF82;
                        opacity: .6;
                    }
    
                    :-moz-placeholder {
                        color: #00FF82;
                        opacity: .6;
                    }
    
                &:focus{
                    background-color: #00FF82;
                    border-color: #00FF82;
                    ::-webkit-input-placeholder {
                        color: #000000;
                        opacity: 1;
                        
                    }
    
                        ::-moz-placeholder {
                            color: #000000;
                            opacity: 1;
                        }
    
                        :-ms-input-placeholder {
                            color: #000000;
                            opacity: 1;
                        }
    
                    :-moz-placeholder {
                            color: #000000;
                            opacity: 1;
                        }
                }
            }
        }
        .homeFormInputWrap{
            max-width: 490px;
            margin: 0 auto 77px;
            @media (max-width: 1399px) {
                margin-bottom: 40px;
            }
            @media (max-width: 899px) {
                margin-bottom: 43px;
            }
            .homeFormInput {
                position: relative;
                margin-bottom: 25px;
                &:last-child{
                    margin-bottom: 0;
                }
                
                .Mui-disabled{
                    color: #fff !important;
                    background-color: #000000 !important;
                }
                .formSubmitted{
                   input{
                    color:#fff !important;
                    background-color: #000000 !important;
                    border-color: #767676 !important;
                   }
                }
                .focused{
                   input{
                    color:#000000;
                    background-color: #00FF82;
                   }
                }
                
            }

        }
        .checkBoxTtitle{
            font-weight: 600;
            font-size: 20px;
            line-height: 1.4;
            text-align: center;
            letter-spacing: 0.02em;
            margin-bottom: 26px;

            @media (max-width: 899px) {
                margin-bottom: 20px;
            }
            @media (max-width: 599px) {
               text-align : left;
               font-size: 17px;
            }
            
        }
        .checboxWrapper {
            max-width: 593px;
            margin-left:  auto;
            margin-bottom: 52px;

            @media ( max-width: 899px) {
                margin:  0 auto 35px;
            }
            .MuiFormControlLabel-root {
                    margin-right: 0;
                    margin-left: 0;
                    margin-bottom: 24px;
                    @media (max-width: 899px) {
                        margin-bottom: 10px;
                    }
                    @media (max-width: 599px) {
                        align-items: center;
                    }

                    &:last-child{
                        margin-bottom: 0;
                    }

                    &:hover{
                        .MuiCheckbox-root{
                            &::before{
                                border-color: #00FF82;
                            }

                            &.Mui-checked{
                                &::before{
                                    border-color: transparent;
                                }
                            }
                        }
                    }
                .MuiCheckbox-root{
                    padding: 0;
                    margin-right: 14px;
                    padding-top: 3px;
                    padding-right: 3px;

                    position: relative;

                    &::before{
                        content: "";
                        position: absolute;
                        left: 2px;
                        bottom: 2px;
                        width: 29px;
                        height: 22px;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        border-top-left-radius: 0;
                        transition: 0.3s all ease;
                    }
                }
                .MuiFormControlLabel-label{
                    font-size: 18px;
                    color: #FFFFFF;
                    line-height: 1.5;
                    letter-spacing: 0.02em;
                    /* padding-top: 2px; */
                    /* text-align: justify; */
                   
    
                    @media (max-width: 599px) {
                        font-size: 14px;
                        /* line-height: 1.2; */
    
                    }
    
                    
                }
            }

        }
    }
    
    .footer{
        padding-bottom: 36px;
        @media (max-width: 899px) {
            padding-bottom: 25px;
        }
        p{
            font-size: 14px;
            letter-spacing: 0.025em;
            line-height: 19px;
            color: rgba(255, 255, 255, 0.34);
            text-align: justify;
        }
       

        .footerLink {
            display: inline-block;
            padding: 0;
            font-size: 14px;
            text-transform: initial;
            font-weight: 400;
            color: #00FF82;
            letter-spacing: 0.025em;
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }

           
        }
    }

    

    .homeInner {
        position: relative;
        min-height: 100vh;
        .homeMain {
            padding-top: 74px;
            
            /* padding-bottom: 100px; */
            @media (max-width: 899px) {
                padding-bottom: 0;
                padding-top: 23px;
            }
            .MuiContainer-root {
                @media (min-width: 900px) {
                    padding-left: 0;
                }
            }
            .MuiGrid-container{
                @media (max-width: 1199px) {
                    align-items: center;
                }
            }
            .homeMainConent{
                max-width: 676px;
                padding-top: 70px;

                @media (max-width: 1399px) {
                    padding-top: 40px;
                }
                @media (max-width: 1199px) {
                    padding-top: 0;
                }
                @media (max-width: 899px) {
                    padding-top: 0;
                    max-width: 100%;
                }
                .homeMainConent_heading{
                    margin-bottom: 62px;

                    @media (max-width: 1399px) {
                        margin-bottom: 50px;
                    }
                    @media (max-width: 899px) {
                        margin-bottom: 28px;
                    }
                    h1{
                        font-size: 60px;
                        font-weight: bold;
                        text-align: center;
                        line-height: 1.2;
                        letter-spacing: 0.02em;
                        @media (max-width: 1399px) {
                            font-size: 50px;
                        }
                        @media (max-width: 1299px) {
                            font-size: 50px;
                        }
                        @media (max-width: 1199px) {
                            font-size: 48px;
                        }
                        @media (max-width: 899px) {
                            font-size: 32px;
                        }
                        @media (max-width: 479px) {
                            font-size: 30px;
                        }
                        
                    }
                }
            }

            
        }
        .desktopLogoWrap{
            /* display: flex; */
            justify-content: center;
            margin-bottom: 28px;
            @media (max-width: 1399px) {
                margin-bottom: 20px;
            }
            @media (max-width: 899px) {
                margin-bottom: 35px;
            }
            .desktopLogo{
                width: 180px;
                display: inline-block;
            }
        }
        .imageColumn{
            position: relative;
            margin-top: -20px;
            figure{
                display: flex;
                /* justify-content: flex-end; */
                img{
                    width: 100%;

                    @media (max-width: 1299px) {
                        width: 90%;
                    }
                    @media (max-width: 1199px) {
                        width: 100%;
                    }
                }
            }
        }

    }

    .imageColumn_Mobile{
        width: 100%;
        margin-bottom: 45px;
        figure{
            width: 100%;
            display: flex;
            justify-content: center;
            img{
                width: auto;
            }
        }
    }


    .checkBoxFormControl{
        align-items: flex-start;
    }

    .formSubmitBtnWrap{
        max-width: 593px;
        margin-left: auto;

        @media ( max-width: 899px) {
            margin:  0 auto;
            display: flex;
            justify-content: center;
        }

        .formSubmitBtnCommon{
            max-width: 487px;
            width: 100%;
            border-radius: 5px;
            height: 52px;
            background: #00FF82;
            color: #000000;
            font-size: 15px;
            font-weight: 400;
            border: 1px solid #00FF82;

            @media (max-width: 899px) {
                margin: 0 auto;
            }

            &:hover{
                background: transparent;
                color: #00FF82;
            }
        }
    }
    .homeFormBotrap{
        padding-left: 15px;
        padding-bottom: 60px;

        @media (max-width: 899px) {
            padding-left: 0;
            padding-bottom: 32px;
        }
    }
    .mobileLogoOuter{
        margin-bottom: 35px;
        .mobileLogoWrap{
            display: flex;
            justify-content: center;
            .mobileLogo{
                width: 100px;
                display: flex;
            }
        }
    }
`