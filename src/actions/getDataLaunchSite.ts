import { ILaunchpads } from "../interfaces/interfaceLaunchpads";

export const launchpadsFetchData = (launchpads: ILaunchpads) => {
    return {
        type: "GET_LAUNCHPADS_FETCH",
        launchpads
    }
};
export const cardsFetchError = () => {
    return {
        type: "ERROR_FETCH",
    }
};

export function getDataLaunchSite() {
    return (dispatch: any) => {
        fetch("https://api.spacexdata.com/v3/launchpads")
            .then(response => response.json())
            .then(respons => dispatch(launchpadsFetchData(respons)))
            .catch(() => dispatch(cardsFetchError()))
    }
}
