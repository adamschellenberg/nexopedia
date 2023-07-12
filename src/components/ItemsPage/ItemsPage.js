import React, { useEffect, useState } from 'react';
import './ItemsPage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { useGetData } from '../../custom-hooks';
import Container from 'react-bootstrap/Container';

export const ItemsPage = () => {
  const [itemData, setItemData] = useState([]);

  const getItemData = async () => {
    const result = await useGetData.useItems();
    setItemData(result);
  }

  useEffect( () => {
    getItemData();
  }, []);

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
              <th className="name-column">Name</th>
              <th className="sprite-column">Sprite</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.itemType === 'Restoration')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;
                  let itemImagePath = "db/extinction/images/items/restoration/" + itemName.replace(/\s+/g, '-').toLowerCase() + ".png";

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td><img className="sprite-img" src={itemImagePath} alt={itemName}/></td>
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
              <th className="name-column">Name</th>
              <th className="sprite-column">Sprite</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.itemType === 'Nexotrap')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;
                  let itemImagePath = "db/extinction/images/items/nexotraps/" + itemName.replace(/\s+/g, '-').toLowerCase() + ".png";

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td><img className="sprite-img" src={itemImagePath} alt={itemName}/></td>
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
              <th className="name-column">Name</th>
              <th className="sprite-column">Sprite</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.itemType === 'Core')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;
                  let itemImagePath = "db/extinction/images/items/cores/" + itemName.replace(/\s+/g, '-').toLowerCase() + ".png";

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td><img className="sprite-img" src={itemImagePath} alt={itemName}/></td>
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
              <th className="name-column">Name</th>
              <th className="sprite-column">Sprite</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.itemType === 'Shard')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;
                  let itemImagePath = "db/extinction/images/items/shards/" + itemName.replace(/\s+/g, '-').toLowerCase() + ".png";

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td><img className="sprite-img" src={itemImagePath} alt={itemName}/></td>
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
              <th className="name-column">Name</th>
              <th className="sprite-column">Sprite</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.itemType === 'Food')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;
                  let itemImagePath = "db/extinction/images/items/food/" + itemName.replace(/\s+/g, '-').toLowerCase() + ".png";

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td><img className="sprite-img" src={itemImagePath} alt={itemName}/></td>
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
              <th className="name-column">Name</th>
              <th className="sprite-column">Sprite</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              itemData
                .filter(item => item.itemType === 'Key Item')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;
                  let itemImagePath = "db/extinction/images/items/key/" + itemName.replace(/\s+/g, '-').toLowerCase() + ".png";

                  return(
                    <tr>
                      <td>{itemName}</td>
                      <td><img className="sprite-img" src={itemImagePath} alt={itemName}/></td>
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
