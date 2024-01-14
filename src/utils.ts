function getObjectEntries(obj: {}): { key: string; value: any }[] {
    const arr = [];

    for (const [key, value] of Object.entries(obj)) {
        if (key && value) {
            arr.push({ key: key, value: value });
        }
    }

    return arr;
}

export { getObjectEntries };
