export const getPagination = (page, size) => {
    const limit = size ? +size : 2;//convertir size a numero +size
    const offset = page ? page * limit : 0;
    return { limit, offset }; 
}