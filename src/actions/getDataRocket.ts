import { IRocket } from "../interfaces/interfaceRocket";

export const dragonsFetchData = (rockets: IRocket) => {
    return {
        type: "CARDS_FETCH",
        rockets
    }
};
export const cardsFetchError = () => {
    return {
        type: "ERROR_FETCH",
    }
};

export function getDataRocket() {
    return (dispatch: any) => {
        fetch("https://api.spacexdata.com/v3/rockets")
            .then(response => response.json())
            .then(respons => dispatch(dragonsFetchData(respons)))
            .catch(() => dispatch(cardsFetchError()))
    }
}
