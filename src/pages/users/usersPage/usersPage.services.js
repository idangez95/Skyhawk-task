import { useEffect, useState } from "react";
import { usersDataState } from "../../../state/atoms/userDataState";
import { useRecoilState } from "recoil";

export const useUsersPageServices = () => {
    const [isValidRow, setIsValidRow] = useState(false);
    const [usersData, setUsersData] = useRecoilState(usersDataState);

    const initialTempUsersData = JSON.parse(localStorage.getItem('user_data')) || usersData;
    const [tempUsersData, setTempUsersData] = useState(initialTempUsersData);

    const hasEmptyValues = tempUsersData.some((user) =>
        Object.values(user).some((value) => value === "")
    );

    useEffect(() => {
        localStorage.setItem('user_data', JSON.stringify(tempUsersData));
    }, [tempUsersData]);

    const saveUsers = () => {
        setUsersData(tempUsersData);
    };

    return {
        isValidRow,
        setIsValidRow,
        hasEmptyValues,
        saveUsers,
        usersData,
        tempUsersData,
        setTempUsersData,
        setUsersData
    }
}