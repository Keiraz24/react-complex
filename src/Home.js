import axios from 'axios';
import React,{useEffect,useState} from 'react';
import Colors from './Colors';

const Home=()=>{

    const [Data, setData]=useState({
        Company:'',
        Description:''
    })
    const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
        .then(res=>{
            console.log('Response from main API: ',res)
            console.log('Home Data: ',res.data.ad)
            let companyData=res.data.ad;
            setData({Company:"eisr8gujq[0wae9ruhjb",Description:"a[0eribja0e]9ofj"})
            console.log('Colors Data: ',res.data.data)
            setColorsData(res.data.data)
         })
    .catch(err=>{
        console.log(err);
    })
},[])
return(
    <>
        <h1>{Data.Company}</h1>
        <p>{Data.Description}</p>
        <Colors data ={colorsData}/>
    </>
    )
}
export default Home;
