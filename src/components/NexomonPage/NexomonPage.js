import React, { useEffect, useState } from 'react';
import './NexomonPage.css';
import { useGetData } from '../../custom-hooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                {/* <h1 className="display-3 nexomon-header text-center">{nexomonData.name}</h1>
                <img className="float-left" src={nexomonData.imgUrl} alt={nexomonData.name}/>
                <span>{nexomonData.number}</span>
                <br />{nexomonData.nexomonType}<img src={nexomonData.typeUrl} alt={nexomonData.nexomonType}/> */}
                
                <div className="nexomon-header">
                <Row>
                    <Col><h1 className="display-3 text-center">{nexomonData.name} <span>#{nexomonData.number}</span></h1></Col>                    
                </Row>
                </div>
                <Row>
                    <Col><img className="nexomon-sprite-img float-left" src={nexomonData.imgUrl} alt={nexomonData.name}/>
                    <span className="align-top text-center">{nexomonData.nexomonType}<img src={nexomonData.typeUrl} className="nexomon-element-img" alt={nexomonData.nexomonType}/></span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}