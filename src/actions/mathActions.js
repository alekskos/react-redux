export function addNum (number) {
    return {
      type: 'ADD',
      payload: number
    };
}
export function subtractNum (number) {
    return {
      type: 'Subtract',
      payload: number
    };
}