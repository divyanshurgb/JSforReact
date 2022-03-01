const fetchPost = async () => {
    try {
        async function fetchPost() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const result = await res.json()
            console.log(result)
            // .then((res) => res.json())
            // .then((result) => {
            //     console.log(result)
            // })
            // .catch((err) => {
            //     console.log(err)
            // })
            }            
    } catch(err) {
        console.log(err)
    }
}


