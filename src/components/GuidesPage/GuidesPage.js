import React, { useState, useEffect } from 'react';
import { useGetData } from '../../custom-hooks';
import './GuidesPage.css';
import Container from 'react-bootstrap/Container';
import CosmicIndicator from '../../assets/images/cosmic-indicator.gif';

export const GuidesPage = () => {

  const [statusData, setStatusData] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [vaultData, setVaultData] = useState([]);
  const [keyData, setKeyData] = useState([]);

  const getData = async () => {
    const statusResult = await useGetData.useStatus();
    const typeResult = await useGetData.useType();
    const vaultResult = await useGetData.useVault();
    const keyResult = await useGetData.useKey();

    setStatusData(statusResult);
    setTypeData(typeResult);
    setVaultData(vaultResult);
    setKeyData(keyResult);
  };

  useEffect( () => {
    getData();
  }, []);

  return (
    <div>
    <div className="guidesBackground" />
      <Container>
        <h1 className='display-3 guides-header text-center'>Guides and FAQ</h1>

{/* Type Effectiveness Chart */}
        <h6 className='display-6' id="type-chart-title">Type Effectiveness Chart</h6>
        <table className='table table-dark table-bordered table-sm' id="type-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Normal <img className="element-img" src="db/extinction/images/elements/normal.png" alt="Normal"/></th>
                  <th>Fire <img className="element-img" src="db/extinction/images/elements/fire.png" alt="Fire"/></th>
                  <th>Water <img className="element-img" src="db/extinction/images/elements/water.png" alt="Water"/></th>
                  <th>Plant <img className="element-img" src="db/extinction/images/elements/plant.png" alt="Plant"/></th>
                  <th>Wind <img className="element-img" src="db/extinction/images/elements/wind.png" alt="Wind"/></th>
                  <th>Electric <img className="element-img" src="db/extinction/images/elements/electric.png" alt="Electric"/></th>
                  <th>Mineral <img className="element-img" src="db/extinction/images/elements/mineral.png" alt="Mineral"/></th>
                  <th>Ghost <img className="element-img" src="db/extinction/images/elements/ghost.png" alt="Ghost"/></th>
                  <th>Psychic <img className="element-img" src="db/extinction/images/elements/psychic.png" alt="Psychic"/></th>
                </tr>
              </thead>
              <tbody>
                {
                  typeData.map( (element) => {
                    let displayType = element.type;
                    let normal = element.normal;
                    let fire = element.fire;
                    let water = element.water;
                    let plant = element.plant;
                    let wind = element.wind;
                    let electric = element.electric;
                    let mineral = element.mineral;
                    let ghost = element.ghost;
                    let psychic = element.psychic;
                    let elementImagePath = "db/extinction/images/elements/" + displayType.toLowerCase() + ".png";

                    return (
                      <tr>
                        <td>{displayType} <img className="element-img" src={elementImagePath} alt={displayType} /></td>
                        <td>{normal}</td>
                        <td>{fire}</td>
                        <td>{water}</td>
                        <td>{plant}</td>
                        <td>{wind}</td>
                        <td>{electric}</td>
                        <td>{mineral}</td>
                        <td>{ghost}</td>
                        <td>{psychic}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>

{/* Status Effects Chart */}
        <h6 className='display-6' id="status-effects-title">Status Effects Chart</h6>
        <table className='table table-dark table-bordered table-sm' id="status-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Sprite</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              statusData.map( (status) => {
                let effect = status.effect;
                let description = status.description;
                let statusImagePath = "db/extinction/images/status/" + effect.replace(/\s+/g, '-').toLowerCase() + ".png";

                return (
                  <tr>
                    <td>{effect}</td>
                    <td className="status-img"><img src={statusImagePath} alt={effect} /></td>
                    <td>{description}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

{/* Vaults and Keys List */}
        <h6 className='display-6' id="vaults-title">Spencer's Vault and Key Locations</h6>
        <h6>Keys:</h6>
        <table className="table table-bordered table-dark table-sm" id="key-table">
          <thead>
            <tr>
              <th>Key #</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {
              keyData.map( (key) => {
                let keyNumber = key.keyId;
                let keyLocation = key.location;

                return (
                  <tr>
                    <td>{keyNumber}</td>
                    <td>{keyLocation}</td>
                  </tr>
                )

              })
            }
          </tbody>
        </table>
        <h6>Vaults:</h6>
        <table className='table table-bordered table-dark table-sm' id="vault-table">
          <thead>
            <tr>
              <th>Vault #</th>
              <th>Location</th>
              <th>Rewards</th>
            </tr>
          </thead>
          <tbody>
            {
              vaultData.map( (vault) => {
                let vaultNumber = vault.vaultId;
                let vaultLocation = vault.location;
                let vaultContents = vault.contents;

                  return (
                    <tr>
                      <td>{vaultNumber}</td>
                      <td>{vaultLocation}</td>
                      <td>{vaultContents}</td>
                    </tr>
                  )
              })
            }
          </tbody>
        </table>

{/* Cosmic Nexomon FAQ */}
        <h6 className="display-6" id="cosmic-title">Cosmic Nexomon</h6>
        <div className='cosmic-info'>
        <ul>
          <li><span className='font-weight-bold'>What is a cosmic Nexomon?</span> Cosmic Nexomon are the equivalent to shiny Pokemon. Color variants of the Nexomon you know and love.</li>
                  <li><span className='font-weight-bold'>How will I know if a Nexomon is cosmic?</span> Cosmic Nexomon name boxes will flash red, like in the gif below.</li>
                  <img src={CosmicIndicator} alt="cosmic indicator"/>
          <li><span className='font-weight-bold'>What are the odds of finding a cosmic Nexomon?</span> The rate of finding a cosmic Nexomon starts at 1/4000 (0.025%) at the beginning of the game. However, as you progress through the game, this oods will increase as follows:</li>
          <ul>
            <li>Odds increase to 1/3500 (0.029%) after saving Ignitia, and increases again to 1/3000 (0.033%) after completing the Drake Isles chapter</li>
            <li>The rate increases by 1 point for each uniquely seen Nexomon. Example: 1/3000 odds are increased to 1/2950, if you have seen 50 different Nexomon.</li>
            <li>The rate increases by 2 points for each uniquely owned Nexomon. Example: 1/2950 odds are increased to 1/2900, if you have captured 50 different Nexomon.</li>
            <li>The rate increases 50 points for each Cosmic Charm owned. Example: 1/2900 odds are increased to 1/2800, if two Cosmic Charms are owned.</li>
            <li>The best possible odds of finding a cosmic Nexomon are 1/1607 (0.0622%), if you are in the late-game, have captured every Nexomon, and have found all five Cosmic Charms.</li>
          </ul>
			  </ul>
        </div>

      </Container>
    </div>
  )
}
