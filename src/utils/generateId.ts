export const generateId = (length: number = 10) => {
    return Array.from(
        { length },
        () =>
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[
                Math.floor(Math.random() * 62)
            ]
    ).join('');
};
