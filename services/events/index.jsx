export const getEvent = async (param) => {
    try {
        const response = await fetch(`https://dev.cms.dimulai.apps360.id/items/Event?page=${param.page}&limit=${[param.limit]}&search=${param.search}`,{
            method: 'GET',
        },{ cache: 'no-store' });

        return response.json(); 
    } catch (error) {
        console.error(error.message)
        return []
    }
}

export const getEventBySlug = async (param) => {
    try {
        const response = await fetch(`https://dev.cms.dimulai.apps360.id/items/Event?filter[slug][_eq]=${param}`,{
            method: 'GET',
        },{ cache: 'no-store' });

        return response.json(); 
    } catch (error) {
        console.error(error.message)
        return []
    }
}