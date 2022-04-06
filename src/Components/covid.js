import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            //use await when returning a promise

            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json()
            console.log(actualData);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);

        }
    }

    useEffect(() => {
        getCovidData();
    }, [])


    return (
        <>
            <h1>Live</h1>
            <h2>Covid-19 Tracker | Until 2020</h2>
            <section className='dashboard'>


                <ul>
                    <section >
                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'><span>Our</span> COUNTRY</p>
                                    <p className='card_total card_small'>INDIA</p>
                                </div>
                            </div>
                        </li>

                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'><span>Total</span> RECOVERED</p>
                                    <p className='card_total card_small'>{data.recovered}</p>
                                </div>
                            </div>
                        </li>

                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'><span>TOTAL</span> CONFIRMED</p>
                                    <p className='card_total card_small'>{data.confirmed}</p>
                                </div>
                            </div>
                        </li>
                    </section>

                    <section>
                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'><span>TOTAL</span> DEATH</p>
                                    <p className='card_total card_small'>{data.deaths}</p>
                                </div>
                            </div>
                        </li>

                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'><span>TOTAL</span> ACTIVE</p>
                                    <p className='card_total card_small'>{data.active}</p>
                                </div>
                            </div>
                        </li>

                        <li className='card'>
                            <div className='card_main'>
                                <div className='card_inner'>
                                    <p className='card_name'><span>LAST</span> UPDATED</p>
                                    <p className='card_total card_small'>{data.lastupdatedtime}</p>
                                </div>
                            </div>
                        </li>
                    </section>

                </ul>
            </section>
        </>
    )
}

export default Covid