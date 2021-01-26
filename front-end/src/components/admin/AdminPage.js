import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {useState} from 'react'
function AdminHome() {

    const [sidebarOpen, setSibarOpen] = useState(false);
    
    const openSidebar = () => {
        setSibarOpen(true);
    }

    const closeSidebar = () => {
        setSibarOpen(false);
    }

    return (
        <div className="container">
            <h1>Dashboard Admin</h1>
        </div>
    )
}

export default AdminHome
