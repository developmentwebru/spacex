export const rockets = (state: any = [], action: any) => {
    switch (action.type) {
        case "CARDS_FETCH":
            return [...state, ...action.rockets];
        default:
            return state;
    }
}
