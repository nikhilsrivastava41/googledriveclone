import React from 'react';
import GDlogo from '../../media/drive-icon.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import '../../styles/Header.css';
const index = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={GDlogo} alt=""/>
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon/>
                    <input type="text" placeholder="Search in Drive"/>
                    <ExpandMoreIcon/>
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
                </span>
                <AppsIcon/>
                <img src="" alt="user image"/>
            </div>
        </div>
    )
}

export default index
