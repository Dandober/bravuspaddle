import React, { useEffect, useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  const [windyMap, setWindyMap] = useState(null);
  const [lineVisibility, setLineVisibility] = useState({
    "Aline Lotto": true,
    "Anne Liese": true,
    "Daniel Dobereiner": true,
    "Gustavo Peralta": true,
    "Lia Yuri": true,
    Lucielen: true,
    Milton: true,
    "Rodrigo Macedo": true,
  });
  const [showAllLines, setShowAllLines] = useState(true);

  useEffect(() => {
    // Initialize Windy map when the component mounts
    if (window.W) {
      const map = window.W.map("windy-map", {
        key: "8vj6wkiI3k0jYcvkcO5FEtRlsKat9aXt",
        lat: 52.5200, // Set your desired initial latitude
        lon: 13.4050, // Set your desired initial longitude
        zoom: 7,      // Set your desired initial zoom level
      });
      setWindyMap(map);
    }
  }, []);

  const toggleLineVisibility = (name) => {
    setLineVisibility((prevVisibility) => ({
      ...prevVisibility,
      [name]: !prevVisibility[name],
    }));
  };

  const toggleAllLinesVisibility = () => {
    const newVisibility = {};
    for (const name in lineVisibility) {
      newVisibility[name] = !showAllLines;
    }
    setLineVisibility(newVisibility);
    setShowAllLines(!showAllLines);
  };

  const chartData = {
    labels: ["04-23", "07-23", "10-23"],
    series: [
      lineVisibility["Aline Lotto"] ? [1520, 1470, 0] : [],
      lineVisibility["Anne Liese"] ? [1400, 1410, 1450] : [],
      lineVisibility["Daniel Dobereiner"] ? [0, 1510, 1610] : [],
      lineVisibility["Gustavo Peralta"] ? [0, 0, 1600] : [],
      lineVisibility["Lia Yuri"] ? [1460, 1440, 1390] : [],
      lineVisibility["Lucielen"] ? [1400, 0, 1390] : [],
      lineVisibility["Milton"] ? [0, 1560, 1570] : [],
      lineVisibility["Rodrigo Macedo"] ? [0, 1470, 1530] : [],
    ],
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Próxima Prova</p>
                      <Card.Title as="h4">
                        Fev / 2024 - Leme ao Pontal{" "}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  
                  <a
                    href="https://alohaspiritmidia.com.br/calendario-de-eventos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Calendário de eventos Aloha Spirit
                  </a>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">To be set</p>
                      <Card.Title as="h4">XXXXXXX</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  XXXXXX
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">XXXXXXXX</p>
                      <Card.Title as="h4">XXXXX</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                 XXXXXXX
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">XXXXXXX</p>
                      <Card.Title as="h4">XXXXXX</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                 XXXXXX
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Tomada de Tempo</Card.Title>
                <p className="card-category">Distância (m)</p>
              </Card.Header>
              <Card.Body>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "20px",
                  }}
                >
                  <button
                    style={{
                      background: "#007bff",
                      color: "#fff",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                    onClick={toggleAllLinesVisibility}
                  >
                    {showAllLines ? "Hide All" : "Show All"}
                  </button>
                </div>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={chartData}
                    type="Line"
                    options={{
                      low: 0,
                      high: 1700,
                      low: 0,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 80,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i
                    className={`fas fa-circle text-info ${
                      lineVisibility["Aline Lotto"] ? "visible" : "hidden"
                    }`}
                    onClick={() => toggleLineVisibility("Aline Lotto")}
                  ></i>
                  Aline Lotto{" "}
                  <i
                    className={`fas fa-circle text-danger ${
                      lineVisibility["Anne Liese"] ? "visible" : "hidden"
                    }`}
                    onClick={() => toggleLineVisibility("Anne Liese")}
                  ></i>
                  Anne Liese{" "}
                  <i
                    className={`fas fa-circle text-warning ${
                      lineVisibility["Daniel Dobereiner"] ? "visible" : "hidden"
                    }`}
                    onClick={() => toggleLineVisibility("Daniel Dobereiner")}
                  ></i>
                  Daniel Dobereiner{" "}
                  <i
                    className={`fas fa-circle text-primary ${
                      lineVisibility["Gustavo Peralta"] ? "visible" : "hidden"
                    }`}
                    onClick={() => toggleLineVisibility("Gustavo Peralta")}
                  ></i>
                  Gustavo Peralta{" "}
                  <i
                    className={`fas fa-circle text-secondary ${
                      lineVisibility["Lia Yuri"] ? "visible" : "hidden"
                    }`}
                    onClick={() => toggleLineVisibility("Lia Yuri")}
                  ></i>
                  Lia Yuri{" "}
                  <i
                    className={`fas fa-circle text-success ${
                      lineVisibility["Lucielen"] ? "visible" : "hidden"
                    }`}
                    onClick={() => toggleLineVisibility("Lucielen")}
                  ></i>
                  Lucielen{" "}
                  <i
                    className={`fas fa-circle text-dark ${
                      lineVisibility["Milton"] ? "visible" : "hidden"
                    }`}
                    onClick={() => toggleLineVisibility("Milton")}
                  ></i>
                  Milton{" "}
                  <i
                    className={`fas fa-circle text-light ${
                      lineVisibility["Rodrigo Macedo"] ? "visible" : "hidden"
                    }`}
                    onClick={() => toggleLineVisibility("Rodrigo Macedo")}
                  ></i>
                  Rodrigo Macedo{" "}
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Ultima atualização outubro 2023 dias atrás
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
          <Card>
  <Card.Header>
    <Card.Title as="h4">Tempo 1Km</Card.Title>
    <p className="card-category">Média e tempo total</p>
  </Card.Header>
  <Card.Body>
    <table className="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>04-23</th>
          <th>07-23</th>
          <th>01-24</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Aline Lotto</td>
          <td style={{ color: 'green' }}>05:03</td>
          <td>05:08</td>
          <td>N/D</td>
          
        </tr>
        <tr>
          <td>Anne Liese</td>
          <td>05:33</td>
          <td>05:32</td>
          <td>N/D</td>
        </tr>
        <tr>
          <td>Daniel Dobereiner</td>
          <td>N/D</td>
          <td>05:13</td>
          <td>N/D</td>
        </tr>
        <tr>
          <td>Gustavo Peralta</td>
          <td>N/D</td>
          <td>N/D</td>
          <td>N/D</td>
        </tr>
        <tr>
          <td>Lia Yuri</td>
          <td>05:15</td>
          <td>05:43</td>
          <td>N/D</td>
        </tr>
        <tr>
          <td>Lucielen</td>
          <td>05:55</td>
          <td>N/D</td>
          <td>N/D</td>
        </tr>
        <tr>
          <td>Milton</td>
          <td>N/D</td>
          <td style={{ color: 'green' }}>05:04</td>
          <td>N/D</td>
        </tr>
        <tr>
          <td>Rodrigo Macedo</td>
          <td>N/D</td>
          <td>05:37</td>
          <td>N/D</td>
        </tr>


        {/* Add more rows as needed */}
      </tbody>
    </table>
  </Card.Body>
</Card>
          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Treino da Semana</Card.Title>
                <p className="card-category">Janeiro / 1</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <div>
                    Janeiro - Semana 1<hr></hr>1 - 1Km Zona 2, com remada bem
                    longa, trabalhando bem o giro e a postura.
                    <hr></hr>2 - Tomada de tempo de 5Km, 2,5Km para ir, 2,5Km
                    para voltar, mesmo sentido.
                    <hr></hr>3 - 1Km para soltar na Zona 2.
                  </div>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
