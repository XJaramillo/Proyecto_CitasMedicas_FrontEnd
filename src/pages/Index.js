import React from 'react';
import AppointmentList from '../components/AppointmentList';
import { useAppointmentList } from '../data/useAppointmentList';
import ShowError from '../components/ShowError';


const HomePage = () => {
//  const appointments = useAppointmentList();

  return (
    <>
      <h1 className='page-title'>
        Sistema de citas Medicas
      </h1>

      {/*<p>Página de Home</p>*/}

      {/*<h2>Lista de Artículos</h2>*/}
      {/*{*/}
      {/*  appointments.isLoading*/}
      {/*    ? 'Cargando...'*/}
      {/*    : appointments.isError*/}
      {/*    ? <ShowError error={ appointments.isError } />*/}
      {/*    : <AppointmentList appointments={ appointments.appointments } />*/}
      {/*}*/}
    </>
  );
};


export default HomePage;
