import React, { useState } from 'react';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import './GuidesPage.css';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import CosmicIndicator from '../../assets/images/cosmic-indicator.gif';

export const GuidesPage = () => {
  const [typeOpen, setTypeOpen ] = useState(false);
  const [statusOpen, setStatusOpen ] = useState(false);
  const [vaultOpen, setVaultOpen ] = useState(false);
  const [cosmicOpen, setCosmicOpen ] = useState(false);


  return (
    <div className="guidesBackground">
      <NavBar />
      <Container>
        <div className="guidesMain overflow-visible">
        
          {/* Type effectiveness */}
          <div className="type-effectiveness guide">
          
                Type Effectiveness Chart
             
                <div id="type-effectiveness-collapse">

                <table className="table table-sm table-bordered table-dark table-striped">
            <tr>
              <td></td>
              <td>Normal</td>
              <td>Fire</td>
              <td>Water</td>
              <td>Plant</td>
              <td>Wind</td>
              <td>Electric</td>
              <td>Mineral</td>
              <td>Ghost</td>
              <td>Psychic</td>
            </tr>
            
            <tr>
              <td>Normal</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1.25</td>
              <td>1.25</td>
            </tr>
            
            <tr>
              <td>Fire</td>
              <td>1</td>
              <td>0.65</td>
              <td>1.25</td>
              <td>0.65</td>
              <td>0.65</td>
              <td>1</td>
              <td>1.25</td>
              <td>0.65</td>
              <td>1</td>
            </tr>
            
            <tr>
              <td>Water</td>
              <td>1</td>
              <td>0.65</td>
              <td>0.65</td>
              <td>1.25</td>
              <td>1</td>
              <td>1.25</td>
              <td>0.65</td>
              <td>0.65</td>
              <td>1</td>
            </tr>
            
            <tr>
              <td>Plant</td>
              <td>1</td>
              <td>1.25</td>
              <td>0.65</td>
              <td>0.65</td>
              <td>1.25</td>
              <td>0.65</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            
            <tr>
              <td>Wind</td>
              <td>1</td>
              <td>1.25</td>
              <td>1</td>
              <td>0.65</td>
              <td>1</td>
              <td>1.25</td>
              <td>0.65</td>
              <td>1.25</td>
              <td>1</td>
            </tr>
            
            <tr>
              <td>Electric</td>
              <td>1</td>
              <td>1</td>
              <td>0.65</td>
              <td>1.25</td>
              <td>0.65</td>
              <td>0.65</td>
              <td>1.25</td>
              <td>1</td>
              <td>1.25</td>
            </tr>
            
            <tr>
              <td>Mineral</td>
              <td>1</td>
              <td>0.65</td>
              <td>1.25</td>
              <td>1</td>
              <td>1.25</td>
              <td>0.65</td>
              <td>1</td>
              <td>1</td>
              <td>0.65</td>
            </tr>
            
            <tr>
              <td>Ghost</td>
              <td>0.65</td>
              <td>1.25</td>
              <td>1.25</td>
              <td>1</td>
              <td>0.65</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1.25</td>
            </tr>
            
            <tr>
              <td>Psychic</td>
              <td>0.65</td>
              <td>1</td>
              <td>1</td>
              <td>1.25</td>
              <td>1</td>
              <td>1.25</td>
              <td>0.65</td>
              <td>1.25</td>
              <td>0.65</td>
            </tr>
                </table>

                </div>

          </div>

          {/* Status Effects Chart */}
          <div className="status-effects guide">
            
                Status Effects Chart
           
              <div id="status-effects-collapse">Status Effects</div>
 
          </div>


          {/* Spencer's Vaults and Keys Locations Chart */}
          <div className="vaults guide">
           
                Spencer's Vaults and Keys Locations
            
              <div id="vaults-collapse">Locations list</div>
   
          </div>


          {/* Cosmic Nexomon FAQ */}
          <div className="cosmic guide">
            
                Cosmic Nexomon FAQ
           
              <div id="cosmic-collapse">

                <ListGroup variant="flush">
                  <ListGroup.Item className="bg-transparent">
                    <h6>What is a Cosmic Nexomon?</h6>
                    Cosmic Nexomon are the equivalent of shiny Pokemon.
                    Color variants of the Nexomon you know and love.
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent"><h6>How will I know if a Nexomon is cosmic?</h6>
                    Cosmic Nexomon name boxes will flash red, like in the gif below <br />
                    <img src={CosmicIndicator} alt="cosmic indicator" className="cosmic-indicator"/>
                  </ListGroup.Item>
                  <ListGroup.Item className="bg-transparent">
                    <h6>What are the odds of finding a cosmic Nexomon?</h6>
                    The rate of finding a cosmic Nexomon starts at 1/4000 (0.025%) at the beginning of the game.
                    However, as you progress through the game, these odds will increase as follows:
                      <ul>
                        <li>Odds increase to 1/3500 (0.029%) after saving Ignitia, and increase again to 1/3000 (0.033%) after completing the Drake Isles chapter.</li>
                        <li>The rate increases by 1 point for each uniquely seen Nexomon. Example: 1/3000 odds are increased to 1/2950 if you have seen 50 different Nexomon.</li>
                        <li>The rate increases by 2 points for each uniquely owned Nexomon. Example: 1/2950 odds are increased to 1/2900 if you have captured 25 different Nexomon.</li>
                        <li>The rate increases 50 points for each Cosmic Charm owned. Example: 1/2900 odds are increased to 1/2800 if two Cosmic Charms are owned.</li>
                        <li>The best possible odds of finding a cosmic Nexomon are 1/1607 (0.0622%) if you are in the late-game, have captured every Nexomon, and have found all five Cosmic Charms.</li>
                      </ul>
                  </ListGroup.Item>

                </ListGroup>
              </div>
            
          </div>

        </div>
        <Footer />
      </Container>
    </div>
  )
}
