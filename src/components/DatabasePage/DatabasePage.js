import React, { useState, useEffect } from 'react';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { useGetData } from '../../custom-hooks';
import Container from 'react-bootstrap/Container';
import './DatabasePage.css';


export const DatabasePage = () => {

  const [nexomonData, setNexomonData] = useState([]);

  const getNexomonData = async () => {
    const result = await useGetData.useNexomon();
    setNexomonData(result);
  };

  useEffect( () => {
    getNexomonData();
  }, []);

  return (
    <div>
        <NavBar />
        <div className="databaseBackground" />
        <Container>
          <h1 className="display-3 databaseHeader text-center">
            Nexomon Database
          </h1>
            <table className='table table-light table-bordered table-sm mx-auto' id="database-table">
              <thead>
                <tr>
                  <th id="number-col">#</th>
                  <th>Nexomon</th>
                  <th>Sprite</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {
                  nexomonData.map( (nexomon) => {
                    let nexomonNumber = nexomon.number;
                    let nexomonNumberPadded = nexomonNumber.toString().padStart(3, "0");
                    let nexomonName = nexomon.name;
                    let nexomonType = nexomon.nexomonType;
                    let nexomonTypeImagePath = "db/extinction/images/elements/" + nexomonType.toLowerCase() + ".png";
                    let nexomonImagePath = "db/extinction/images/nexomon/small/" + nexomonNumberPadded + "-" + nexomonName.toLowerCase() + ".png";

                    return (
                      <tr>
                        <td>{nexomonNumberPadded}</td>
                        <td>{nexomonName}</td>
                        <td><img className="nexomon-sprite-img" src={nexomonImagePath} alt={nexomonName} /></td>
                        <td>{nexomonType} <br /><img className="element-img" src={nexomonTypeImagePath} alt={nexomonType} /></td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
        </Container>
        <Footer />
    </div>
  )
}
