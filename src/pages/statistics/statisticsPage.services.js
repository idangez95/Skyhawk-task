import { useMemo } from "react";
import { generateRandomColors, quantifyPeopleByCountry } from "./utils";
import { usersDataState } from "../../state/atoms/userDataState";
import { useRecoilValue } from "recoil";

export const useStatisticsPageServices = () => {
    const usersData = useRecoilValue(usersDataState);

    const chartData = useMemo(() => {
        const labels = [...new Set(usersData.map((user) => user.country))];
        const data = Object.values(quantifyPeopleByCountry(usersData));
        const backgroundColor = generateRandomColors(data.length);

        return {
            labels,
            datasets: [
                {
                    label: 'Countries Pie Chart',
                    borderColor: 'black',
                    borderWidth: 2,
                    data,
                    backgroundColor,
                },
            ],
        };
    }, [usersData]);

    return {
        chartData
    };
}
