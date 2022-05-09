import React from 'react'
import styles from './styles.module.css'
import MyContext from '../Context/MyContext';
import { useContext } from 'react';

const Navbar = () => {
    const {name} = useContext(MyContext)

    return (
        <div>
            <h3 className={styles.navbar}>Hi {name}!</h3>
        </div>
    )
}

export default Navbar