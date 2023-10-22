import { useEffect, useState } from "react";
import { generateRandomColors, quantifyPeopleByCountry } from "./utils";
import { usersDataState } from "../../state/atoms/userDataState";
import { useRecoilValue } from "recoil";

export const useStatisticsPageServices = () => {
    const usersData = useRecoilValue(usersDataState);
    const [chartData, setChartData] = useState({
        datasets: [
            {
                label: 'Countries Pie Chart',
                borderColor: 'black',
                borderWidth: 2,
            },
        ],
    });

    useEffect(() => {
        setChartData({
            ...chartData,
            labels: [...new Set(usersData.map((user) => user.country))],
            datasets: [
                {
                    ...chartData.datasets[0],
                    data: Object.values(quantifyPeopleByCountry(usersData)),
                    backgroundColor: generateRandomColors(
                        Object.values(quantifyPeopleByCountry(usersData)).length
                    ),
                },
            ],
        });
    }, [usersData]);

    return {
        chartData
    }
}