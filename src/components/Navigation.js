/**
 * Created by chalosalvador on 2/7/20
 */
import React, { useState } from 'react';

import Routes from '../constants/routes';
import { useAuth } from '../providers/Auth';
import {Menu, Input, Col} from 'antd';
import { LogoutOutlined, LoginOutlined, LoadingOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navigation.css';

const linkStyle = {};
const { Search } = Input;

const { SubMenu } = Menu;
const Navigation = ( props ) => {
  let location = useLocation();

  const [ menuState, setMenuState ] = useState( {
    current: location.pathname, // set the current selected item in menu, by default the current page
    collapsed: false,
    openKeys: []
  } );
  const { isAuthenticated, isCheckingAuth, currentUser } = useAuth();

  React.useEffect( () => {
    setMenuState( {
      ...menuState,
      current: location.pathname
    } );
  }, [ location, isAuthenticated ] );

  const handleClick = ( e ) => {
    console.log( 'click ', e );
    setMenuState( {
      ...menuState,
      current: e.key
    } );
  };

  return (
    <>



      <Menu
        mode={ props.mode }
        onClick={ handleClick }
        className='menu'
        theme='dark'
        selectedKeys={ [ menuState.current ] }
        style={ {
          lineHeight: '65px',
          width: 'fit-content'
        } }
      >
        <Search placeholder="Buscar sintomas" onSearch={value => console.log(value)} enterButton
                style={{marginRight: 15,marginTop:15, width: 225 }}/>

        <Menu.Item key={ Routes.HOME }>
          <Link to={ Routes.HOME } style={ linkStyle }>Inicio</Link>
        </Menu.Item>

        <Menu.Item key={ Routes.ARTICLES }>
          <Link to={ Routes.ARTICLES } style={ linkStyle }>Como funciona</Link>
        </Menu.Item>

        <Menu.Item key={ Routes.PRIVATE }>
          <Link to={ Routes.PRIVATE } style={ linkStyle }>Citas Agendadas</Link>
        </Menu.Item>

        <Menu.Item key={ Routes.ABOUT }>
          <Link to={ Routes.ABOUT } style={ linkStyle }>Doctores Disponibles</Link>
        </Menu.Item>

        <SubMenu icon={<MailOutlined />} title="Registrarse">
          <Menu.ItemGroup title="Registrate como:">
            <Menu.Item key="setting:1">Doctor</Menu.Item>
            <Menu.Item key="setting:2">Paciente</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>

        {
          isAuthenticated
            ? <Menu.SubMenu icon={ <UserOutlined /> } title={ currentUser && currentUser.name }>
              <Menu.ItemGroup title='Item 1'>
                <Menu.Item key='setting:1'>Option 1</Menu.Item>
                <Menu.Item key='setting:2'>Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title='Item 2'>
                <Menu.Item key='setting:3'>Option 3</Menu.Item>
                <Menu.Item key='setting:4'>Option 4</Menu.Item>
              </Menu.ItemGroup>

              <Menu.Item key={ Routes.LOGIN }>
                <Link to={ Routes.LOGOUT } className='logout-link'>
                  {
                    isCheckingAuth
                      ? <LoadingOutlined />
                      : <><LogoutOutlined /> Salir</>
                  }
                </Link>
              </Menu.Item>
            </Menu.SubMenu>
            : <Menu.Item key={ Routes.LOGIN }>

              <Link to={ Routes.LOGIN }>
                {
                  isCheckingAuth
                    ? <LoadingOutlined />
                    : <><LoginOutlined /> Iniciar Sesion</>
                }
              </Link>
            </Menu.Item>
        }

      </Menu>
    </>
  );
};

export default Navigation;
