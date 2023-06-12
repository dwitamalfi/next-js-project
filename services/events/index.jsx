export default async function getEvent() {
    try {
        const response = await fetch(`https://dev.cms.dimulai.apps360.id/items/Event?page=1&limit=999&search=`,{
            method: 'GET',
        });
        console.log("response service",response);
        // if (response?.data) {
        //     const filteredEvent = res?.data
        //       ?.filter((item) => {
        //         const event_date = moment(item?.Tanggal_waktu_event)?.format(
        //           "YYYY-MM-DD"
        //         );
        //         return (
        //           event_date >= moment().format("YYYY-MM-DD")
        //         );
        //       })
        //       ?.sort(
        //         (a, b) =>
        //           new Date(a?.Tanggal_waktu_event) - new Date(b?.Tanggal_waktu_event)
        //       );
        //   }

        return response.json(); 
    } catch (error) {
        console.error(error.message)
        return []
    }
}