function getObjectEntries(obj: any): { key: string; value: any }[] {
    const arr = [];

    for (const [key, value] of Object.entries(obj)) {
        arr.push({ key: key, value: value });
    }

    return arr;
}

export { getObjectEntries };
