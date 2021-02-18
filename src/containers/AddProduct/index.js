import React from 'react';
import { useContext } from "react";
import { ThemeContext } from "./../../context/ThemeContext";
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    Button,
    Link,
    Typography,    
} from '@material-ui/core';
import ProductDetail from './ProductDetail';
import Categorization from './Categorization';
import Review from './Review';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(8),
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ['Product Details', 'Categorization', 'Confirmation'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <ProductDetail />;
        case 1:
            return <Categorization />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

export default function AddProduct() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const { isLightTheme,light,dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
                <Paper className={classes.paper} style={{ background: theme.ui, color: theme.color }}>
                    <Typography component="h1" variant="h4" align="center">
                        Add Your Product
          </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper} style={{ background: theme.bg, color: theme.color }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for adding your product.
                </Typography>
                                <Typography variant="subtitle1">
                                    Your Product is added to shopping list.
                </Typography>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                    <Button onClick={handleBack} color="secondary" className={classes.button}>
                                                Back
                    </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Add Product' : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                </Paper>
    );
}