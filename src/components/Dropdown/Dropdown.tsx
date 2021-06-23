import React from 'react'
import './Dropdown.css'
import DropdownLaunchSite from '../DropdownLaunch/DropdownLaunch'
import DropDownRocket from '../DropDownRocket/DropDownRocket';

export class Dropdowns extends React.Component<any>{

    render() {

        return (
            <form className='dropdown'>
                <div className='dropdown__item'>
                    <DropdownLaunchSite />
                    <DropDownRocket />
                </div>
            </form >
        )
    }
}