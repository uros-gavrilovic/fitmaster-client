import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Fragment } from "react";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useEffect } from "react";
import withTranslations from "../../../utils/HighOrderComponent";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import { Button } from "@mui/material";

const CustomStepper = (props) => {
  const {
    steps,
    components,
    isOptional,
    finishStep,
    stepsFinishedMessage,
    activeIndex,
    setActiveIndex,
    t,
  } = props || {};

  const [activeStep, setActiveStep] = useState(components[0]);
  const [skipped, setSkipped] = useState(new Set());

  useEffect(() => {
    setActiveStep(components[activeIndex]);
  }, [activeIndex, components]);

  const isStepOptional = (step) => {
    return isOptional[step];
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveIndex((prevIndex) => prevIndex + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeIndex)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveIndex((prevIndex) => prevIndex + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveIndex(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeIndex}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">{t?.optional}</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeIndex === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>{stepsFinishedMessage}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              variant="outlined"
              width="100%"
              sx={{ mr: 1 }}
              endIcon={<RotateLeftIcon />}
              onClick={handleReset}
            >
              {t?.btnReset}
            </Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          {activeStep}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeIndex >= 1 && (
              <Button
                variant="outlined"
                width="100%"
                sx={{ mr: 1 }}
                startIcon={<KeyboardArrowLeftIcon />}
                onClick={handleBack}
              >
                {t?.btnBack}
              </Button>
            )}

            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeIndex) && (
              <Button
                title={t?.btnSkip}
                variant="outlined"
                width="100%"
                sx={{ mr: 1 }}
                rightIcon={<SkipNextIcon />}
                onClick={handleSkip}
              >
                {t?.btnSkip}
              </Button>
            )}

            {(activeIndex === steps.length - 1 && finishStep) || (
              <Button
                variant="outlined"
                width="100%"
                sx={{ mr: 1 }}
                endIcon={<KeyboardArrowRightIcon />}
                onClick={handleNext}
              >
                {t?.btnNext}
              </Button>
            )}
          </Box>
        </Fragment>
      )}
    </Box>
  );
};

export default withTranslations(CustomStepper, "CustomStepper");
