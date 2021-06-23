import { Imission } from "../interfaces/interfaceLaunches";

export const launchesFetchData = (launches: Imission[]) => {
    return {
        type: "GET_LAUNCHES_FETCH",
        launches,
        isLoading: false
    }
};
export const cardsFetchError = () => {
    return {
        type: "ERROR_FETCH",
    }
};

export function getDataMissions() {
    return (dispatch: any) => {
        fetch("https://api.spacexdata.com/v3/launches")
            .then(response => response.json())
            .then(respons => dispatch(launchesFetchData(respons)))
            .catch(() => dispatch(cardsFetchError()))

    }
}
