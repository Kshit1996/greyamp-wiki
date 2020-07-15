import React, {useState} from 'react';
import Iframe from 'react-iframe'
import {ButtonGroup, Col, Row, ToggleButton} from "react-bootstrap";

function Chart(props) {

  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    {name: 'Overall', value: '1'},
    {name: 'Details', value: '2'},
  ];

  function renderChart(url) {
    return (
        <Col md={"auto"}>
          <Iframe
              id={url}
              url={url}
              width={props.width}
              height={props.height}
              frameBorder={0}
          />
        </Col>
    )

  }

  return (<>
        <Row className="justify-content-md-center">
          {props.url.map((url)=>{return renderChart(url)})}
        </Row>
        <Row className="justify-content-md-center">
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
            ))}
          </ButtonGroup>
        </Row>
      </>
  );

}

export default Chart;
