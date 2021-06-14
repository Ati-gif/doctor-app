import { Link } from 'react-router-dom'
import {Menu, Button} from 'semantic-ui-react'

const NavBar = () => {
    return (
        <Menu>
          <Button basic color='teal'>
            <Link to='/'>
                <Menu.Item>
                    Home
                </Menu.Item>
            </Link>
            </Button>
            <Button basic color='teal'>
            <Link to='/doctors'>
                <Menu.Item>
                    Doctors
              </Menu.Item>
            </Link>
            </Button>
            <Button basic color='teal'>
            <Link to='/users'>
                <Menu.Item>
                    Users
              </Menu.Item>
            </Link>
            </Button>
            <Button basic color='teal'>
            <Link to='/appointments'>
                <Menu.Item>
                    Appointments
              </Menu.Item>
            </Link>
          </Button>
          <Button basic color='teal'>
            <Link to='/about'>
                <Menu.Item>
                    About
              </Menu.Item>
            </Link>
            </Button>
        </Menu>
      
    )
  }


    
export default NavBar
