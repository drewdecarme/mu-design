/**
 * Given an array that is strongly typed with a discriminated union generic
 * this function will return an object that can be used to create a
 * typesafe class. So if the type changes, then the class will most
 * likely throw a compiler error
 */
export function makeClass<T extends string>(classNameValues: T[]) {
    const obj = classNameValues.reduce<Record<T, string>>((accum, key) => {
        return { ...accum, [key]: `.${key}` };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
    }, {});
    return obj as unknown as Record<T, string>;
}
