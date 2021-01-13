import React from 'react'

const Backdrop = ({ show, hide_menu }) => {

    return show && <div
        className="back-drop"
        onClick={hide_menu}
    >

    </div>

}

export default Backdrop
