import React, { useEffect, useState } from "react";
import { Text } from "react-native-paper";
const ApiTest =() =>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ed6e71c758msh404beb60c0444dap1094a1jsne3922c81dd57',
            'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
        }
    };
    
    fetch('https://amazon23.p.rapidapi.com/product-details?asin=B08H8VZ6PV&country=US', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
    return(
        <Text>hello</Text>
    )
}
   
    

    


export default ApiTest;