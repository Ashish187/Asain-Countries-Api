import React,{ useState,useEffect } from 'react'
const url = "https://restcountries.com/v3/region/asia"


const Countries = () => {
    const [countries, setCountries] = useState([])

    const fetchcountry = async ()=>{
        const fetchresponse = await fetch(url)
        const countries = await fetchresponse.json()
        setCountries(countries)
    }
    useEffect(()=>{
        fetchcountry()
    },[])
    return (
        <>
            <section className="grid">
            {countries.map((country)=>{
                const { ccn3,name,capital,flags,region,subregion,population,languages,borders} = country
                const entries = Object.entries(languages)

                return <article key={ccn3}>
                    <div className="info">
                    <img src={flags[1]} alt={name.common}/>
                    <h3>Name: {name.common}</h3>
                    <h3>Capital: {capital}</h3>
                    <h3>Region: {region}</h3>
                    <h3>Subregion: {subregion}</h3>
                    <h3>Population: {population}</h3>
                    <h3>Languages:
                       {entries.map((entry)=>{
                           return <div>
                               
                               <p>{entry.slice(1,3)}</p>
                           </div>
                       })}
                        </h3>
                    <h3 className="border">Borders:
                       {borders+" "}
                       
                        </h3>
                    </div>
                </article>
            })}
            </section>
        </>
    )
}

export default Countries


