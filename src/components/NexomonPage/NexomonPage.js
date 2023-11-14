import React, { useEffect, useState } from 'react';
import './NexomonPage.css';
import { useGetData } from '../../custom-hooks';
import Container from 'react-bootstrap/Container';

export const NexomonPage = () => {
    const [nexomonName, setNexomonName] = useState("");
    const [nexomonData, setNexomonData] = useState({});

    const setNexomonNameFromUrlData = () => {
        const urldata = window.location.pathname;
        let nexomonUrl = urldata.replace(/\/nexomon\//, '');
        setNexomonName(nexomonUrl);
    }

    const setSingleNexomon = async () => {
        const result = await useGetData.useGetSingleNexomon(nexomonName);
        setNexomonData(result);
    }

    useEffect( () => {
        setNexomonNameFromUrlData();
    }, []);

    useEffect( () => {
        setSingleNexomon();
        // eslint-disable-next-line
    }, [nexomonName]);

    return (
        <div>
            <div className="nexomonBackground" />
            <Container>
                <h1 className="display-3 nexomon-header text-center">{nexomonData.name}</h1>
            </Container>
        </div>
    )
}