import React, { useEffect, useState } from 'react';
import './ItemsPage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { useGetData } from '../../custom-hooks';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsPencil, BsTrash, BsPlusLg } from 'react-icons/bs'

export const ItemsPage = () => {
  const [itemData, setItemData] = useState([]);

  const [modalItemId, setModalItemId] = useState([]);
  const [modalItemName, setModalItemName] = useState([]);
  const [modalItemDescription, setModalItemDescription] = useState([]);
  const [modalItemType, setModalItemType] = useState([]);
  const [modalItemTypeId, setModalItemTypeId] = useState([]);
  
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = () => setShowEditModal(true);
  const [saveType, setSaveType] = useState([]);

  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const handleCloseConfirmDeleteModal = () => setShowConfirmDeleteModal(false);
  const handleShowConfirmDeleteModal = () => setShowConfirmDeleteModal(true);

  const handleItemEdit = (id) => {
    return () => {
      let selectedItem = itemData.filter(function (el) {
        return el.itemId === id.itemId;
      });
      setModalItemId(selectedItem[0].itemId);
      setModalItemName(selectedItem[0].name);
      setModalItemDescription(selectedItem[0].description);
      setModalItemType(selectedItem[0].itemType);
      setModalItemTypeId(selectedItem[0].itemTypeId);
      setSaveType("Update")
      handleShowEditModal();
    }
  }

  const handleModalItemNameChange = (e) => {
    setModalItemName(e.target.value);
  }
  const handleModalItemDescriptionChange = (e) => {
    setModalItemDescription(e.target.value);
  }
  const handleModalItemTypeChange = (e) => {
    setModalItemTypeId(e.target.value);
  }

  const handleEditModalExit = () => {
    handleCloseEditModal();
    setSaveType("");
    setModalItemId(0);
    setModalItemName("");
    setModalItemDescription("");
    setModalItemType("");
    setModalItemTypeId(0);
  }

  const handleModalSaveChanges = async () => {
    let result = "";
    let updatedItem = {
      name: modalItemName,
      description: modalItemDescription,
      itemTypeId: modalItemTypeId
    };
    if (saveType === "Create") {
      result = await useGetData.createItem(updatedItem);
    } else if (saveType === "Update") {
      updatedItem = {
        itemId: modalItemId
      }
      result = await useGetData.updateItem(updatedItem);
    }
    handleCloseEditModal();
  }
  
  const handleItemDelete = async () => {
      let itemToDelete = {
        itemId: modalItemId
      };
      const result = await useGetData.deleteItem(itemToDelete);
      handleCloseConfirmDeleteModal();
  }

  const handleConfirmItemDelete = (id) => {
    return () => {
      let selectedItem = itemData.filter(function (el) {
        return el.itemId === id.itemId;
      });
      setModalItemId(selectedItem[0].itemId);
      setModalItemName(selectedItem[0].name);
      handleShowConfirmDeleteModal();
    }
  }

  const handleItemCreate = () => {
    return () => {
      setSaveType("Create");
      handleShowEditModal();
    }
  }

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

        {/* EditModal */}
        <Modal show={showEditModal} onHide={handleCloseEditModal} backdrop="static">
          <Modal.Header>
            <Modal.Title>{saveType} Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <InputGroup.Text id="modalItemNameId">Name</InputGroup.Text>
              <Form.Control
                value = {modalItemName}
                onChange = {handleModalItemNameChange}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="modalItemDescriptionId">Description</InputGroup.Text>
              <Form.Control
                value={modalItemDescription}
                onChange = {handleModalItemDescriptionChange}
              />
            </InputGroup>
            <InputGroup>
              <InputGroup.Text id="modalItemTypeId">Type</InputGroup.Text>
              <Form.Select onChange = {handleModalItemTypeChange}>
                <option>Current: {modalItemType}</option>
                <option value="1">Restoration</option>
                <option value="2">Nexotrap</option>
                <option value="3">Core</option>
                <option value="4">Shard</option>
                <option value="5">Food</option>
                <option value="6">Key Item</option>
              </Form.Select>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditModalExit}>
              Exit Without Changes
            </Button>
            <Button variant="primary" onClick={handleModalSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Confirm Delete Modal*/}
        <Modal show={showConfirmDeleteModal} onHide={handleCloseConfirmDeleteModal} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete {modalItemName}?</p>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmDeleteModal}>
              Do Not Delete
          </Button>
          <Button variant="danger" onClick={handleItemDelete}>
              Yes, Delete Item
          </Button>
          </Modal.Footer>
        </Modal>

        {/* Restoration Items table */}
        <h6 className='display-6' id="restoration-title">Restoration Items</h6> <Button variant="success" onClick={handleItemCreate()}><BsPlusLg /></Button>
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
                .filter(item => item.itemType === 'Restoration')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;

                  return(
                    <tr id={itemId}>
                      <td>{itemName}</td>
                      <td>{itemDescription}</td>
                      <td><Button onClick={handleItemEdit({itemId})}><BsPencil /></Button></td>
                      <td><Button onClick={handleConfirmItemDelete({itemId})} variant="danger"><BsTrash /></Button></td>
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
                .filter(item => item.itemType === 'Nexotrap')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;

                  return(
                    <tr id={itemId}>
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
                .filter(item => item.itemType === 'Core')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;

                  return(
                    <tr id={itemId}>
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
                .filter(item => item.itemType === 'Shard')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;

                  return(
                    <tr id={itemId}>
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
                .filter(item => item.itemType === 'Food')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;

                  return(
                    <tr id={itemId}>
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
                .filter(item => item.itemType === 'Key Item')
                .map( (item) => {
                  let itemName = item.name;
                  let itemDescription = item.description;
                  let itemId = item.itemId;

                  return(
                    <tr id={itemId}>
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
