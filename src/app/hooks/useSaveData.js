import { useState } from "react";
import { businessAPI, personalAPI } from "../services/apiServices";
import { useDispatch } from "react-redux";
import { saveData } from "../store/slice";


const useSaveData = () => {
    const dispatch = useDispatch();
    const [dataResult, setDataResult] = useState({});
    const [status, setStatus] = useState("");
 
    const savePersonalData = async (data) => {
        const dataInfo = await personalAPI(data);
        setDataResult(dataInfo.data);
        dispatch(saveData(dataInfo.data.data));
        setStatus(dataInfo.data.status);
    };

    const saveBusinessData = async (data) => {
        const dataInfo = await businessAPI(data);
        setDataResult(dataInfo.data);
        dispatch(saveData(dataInfo.data.data));
        setStatus(dataInfo.data.status)
    }


    return {
        dataResult,
        status,
        savePersonalData,
        saveBusinessData
    }
};

export default useSaveData;