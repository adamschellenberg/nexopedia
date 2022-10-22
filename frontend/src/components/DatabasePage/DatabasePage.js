import React from 'react';
import { NavBar } from '../NavBar';
import { useGetData } from '../../custom-hooks';
import Container from 'react-bootstrap/Container';
import './DatabasePage.css';


export const DatabasePage = () => {
  let nexomonData = useGetData.useNexomon();

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
                  <th>#</th>
                  <th>Nexomon</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {
                  nexomonData.map( (nexomon) => {
                    let nexomonNumber = nexomon.database;
                    let nexomonName = nexomon.name;
                    let nexomonType = nexomon.type;

                    return (
                      <tr>
                        <td>{nexomonNumber}</td>
                        <td>{nexomonName}</td>
                        <td>{nexomonType}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
        </Container>
    </div>
  )
}
