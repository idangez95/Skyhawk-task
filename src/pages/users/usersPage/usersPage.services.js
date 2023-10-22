import { useMemo, useState } from "react";
import { usersDataState } from "../../../state/atoms/userDataState";
import { useRecoilState } from "recoil";


export const useUsersPageServices = () => {
    const [isValidRow, setIsValidRow] = useState(false);
    const [usersData, setUsersData] = useRecoilState(usersDataState);
    const [tempUsersData, setTempUsersData] = useState(usersData);

    const hasEmptyValues = useMemo(
        () => tempUsersData.some((user) => Object.values(user).some((value) => value === '')),
        [tempUsersData]
    );

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
        setTempUsersData
    }
}