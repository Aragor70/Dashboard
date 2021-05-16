export const makeFirstUpper = (str) => {

    const output = str.slice();

    return output.charAt(0).toUpperCase() + output.slice(1).toLowerCase();

}