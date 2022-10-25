import React from 'react';
import './ItemsPage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { useGetData } from '../../custom-hooks';
import Container from 'react-bootstrap/Container';

export const ItemsPage = () => {
  const itemData = useGetData.useItems();

  return (
    <div className="itemsBackground">
      <NavBar />
      <Container>
        <h1 className='display-3 items-header text-center'>Items</h1>

        {/* Restoration Items table */}
        <h6 className='display-6' id="restoration-title">Restoration Items</h6>
        <table className="table table-dark table-bordered table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.type == 'Restoration')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td>{itemDescription}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>

        {/* Nexotrap Items table */}
        <h6 className='display-6' id="nexotrap-title">Nexotrap Items</h6>
        <table className="table table-dark table-bordered table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.type == 'Nexotrap')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td>{itemDescription}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>

        {/* Core Items table */}
        <h6 className='display-6' id="core-title">Core Items</h6>
        <table className="table table-dark table-bordered table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.type == 'Core')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td>{itemDescription}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>

        {/* Shard Items table */}
        <h6 className='display-6' id="shard-title">Shard Items</h6>
        <table className="table table-dark table-bordered table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.type == 'Shard')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td>{itemDescription}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>

        {/* Food Items table */}
        <h6 className='display-6' id="food-title">Food Items</h6>
        <table className="table table-dark table-bordered table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.type == 'Food')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td>{itemDescription}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>

        {/* Key Items table */}
        <h6 className='display-6' id="key-title">Key Items</h6>
        <table className="table table-dark table-bordered table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.type == 'Key Item')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td>{itemDescription}</td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>

        <Footer />
      </Container>
    </div>
  )
}
