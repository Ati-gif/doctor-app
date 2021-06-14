import { Link } from 'react-router-dom'
import { Grid, Menu, Segment } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu fluid vertical tabular>
            <Link to='/'>
                <Menu.Item>
                    Home
                </Menu.Item>
            </Link>
            <Link to='/doctors'>
                <Menu.Item>
                    Doctors
              </Menu.Item>
            </Link>
            <Link to='/users'>
                <Menu.Item>
                    Users
              </Menu.Item>
            </Link>
            <Link to='/appointments'>
                <Menu.Item>
                    Appointments
              </Menu.Item>
            </Link>
            <Link to='/about'>
                <Menu.Item>
                    About
              </Menu.Item>
            </Link>
        </Menu>
      
    )
  }


    
export default NavBar
