"use client";
import { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";

import { useRouter } from "next/navigation";

import { PersonalInfo } from "../forms/PersonalInfo";
import { AddressInfo } from "../forms/AddressInfo";
import { RegisterInfo } from "../forms/RegisterInfo";
import { ClientInfo } from "../forms/ClientInfo";
import { BusinessInfo } from "../forms/BusinessInfo";
import { PreferencesInfo } from "../forms/PreferencesInfo";

import { insertAditionalStep, steps } from "../../utils/step";
import useSaveData from "@/app/hooks/useSaveData";
import "./stepper.css";
import { Modal } from "../Modal";

export const Steeper = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [profileType, setProfileType] = useState("");
  const [formData, setFormData] = useState({});

  const { savePersonalData, saveBusinessData, dataResult, status } =
    useSaveData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    name === "profile_type" && setFormProfile(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const setFormProfile = (value) => {
    insertAditionalStep(value);
    setProfileType(value);
  };

  const handleNext = () => {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    currentStep === steps.length
      ? setComplete(true)
      : setCurrentStep((prev) => (prev === 1 ? prev : prev - 1));
  };

  const saveForm = () => {
    if (profileType === "personal") {
      savePersonalData(formData);
    } else {
      saveBusinessData(formData);
    }
  };

  const statusInfo = () => {
    if (status === "success") {
      setOpen(true);
    }
  };

  const successPage = () => {
    router.push("/success");
  };

  useEffect(() => {
    if (complete) {
      saveForm();
    }
  }, [complete]);

  useEffect(() => {
    statusInfo();
  }, [status]);


  return (
    <>
      <Modal open={open} setOpen={setOpen}>
        <div className="text-center w-56">
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">
              Proceso exitoso
            </h3>
            <p className="text-sm text-gray-500 w-48">
              Sus datos han sido guardados con exito
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="w-full border rounded-md border-blue-400 h-8"
              onClick={successPage}
            >
              Continuar
            </button>
          </div>
        </div>
      </Modal>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className=" text-gray-500">{step}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {currentStep === 1 ? (
          <PersonalInfo handleInputChange={handleInputChange} />
        ) : currentStep === 2 ? (
          <AddressInfo handleInputChange={handleInputChange} />
        ) : currentStep === 3 ? (
          <RegisterInfo handleInputChange={handleInputChange} />
        ) : currentStep === 4 && profileType === "personal" ? (
          <ClientInfo handleInputChange={handleInputChange} />
        ) : currentStep === 4 && profileType === "business" ? (
          <BusinessInfo handleInputChange={handleInputChange} />
        ) : currentStep === 5 ? (
          <PreferencesInfo handleInputChange={handleInputChange} />
        ) : null}
      </div>

      <div className="flex flex-row justify-around w-full">
        {!complete && (
          <button className="btn btn-outlined" onClick={handleBack}>
            {currentStep === steps.length ? "Regresar" : "Regresar"}
          </button>
        )}
        {!complete && (
          <button
            form="form-client"
            type="submit"
            className="btn btn-blue"
            onClick={handleNext}
          >
            {currentStep === steps.length ? "Finalizar" : "Siguiente"}
          </button>
        )}
      </div>
    </>
  );
};
