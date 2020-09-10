import React, { useEffect, useState } from 'react';
import { Skeleton, Card, Col, Row, Radio, Typography, Button } from 'antd';
import Routes from '../constants/routes';
import { Link } from 'react-router-dom';
import { useAppointmentList } from '../data/useAppointmentList';
import ShowError from './ShowError';

const { Text } = Typography;

const AppointmentList = ( props ) => {

    const { appointment, isLoading, isError, mutate } = useAppointmentList();


    if( isLoading ) {
      return <Row justify='center' gutter={ 30 }>
        {
          [ ...new Array( 9 ) ].map( ( _, i ) =>
            <Col xs={ 24 } sm={ 12 } md={ 8 } style={ { marginBottom: 30 } } key={ i }>
              <div style={ { textAlign: 'center' } }>
                <Skeleton.Image style={ { width: 200 } } />
                <Card title='' extra='' cover='' loading />
              </div>
            </Col>
          )
        }
      </Row>;
    }

    if( isError ) {
      return <ShowError error={ isError } />;
    }

    return (
      <>

        <Row justify='center' gutter={ 30 }>
          {
            appointment.map( ( appointment, i ) => (
              <li>
                  {appointment}
              </li>
            ) )
          }
        </Row>
      </>
    );
  }
;

export default AppointmentList;
