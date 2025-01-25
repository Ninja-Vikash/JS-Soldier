/**
 *  Async JS
 */

const fetchData = async () => {
    try {
        const response = await fetch("https://freetestapi.com/api/v1/users")
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error in fetching data", error) 
    } 
}

fetchData().then((data) => {
    if (!data) return

    console.log("Response data is: ", data)
})

