import { useEffect,useState } from "react";

const useFetch = (url:string) => {
     
    const [data,setData] = useState(null);
    const [isLoading,setisLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        fetch(url)
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch data!');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setisLoading(false);
                    setError(null);
                })
                .catch(err => {
                    setisLoading(false);
                    setError(err.message);
                })
     },[url]);

    return {data,isLoading, error}
        
     
}
 
export default useFetch;