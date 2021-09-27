import React from 'react'
import IMAGEFILE from '../image/icon-any-file.svg'

import './description.css'

const Descfiles = () => {
    return (
        <div className="files-desc">
            <img id="image-files" src={IMAGEFILE} />
            <h2 id="text-file">
                Store any type of file
            </h2>
            <p>
                Whether you're sharing holidays photos or work
                documents,Fylo has </p>
            <p>  you
                covered allowing
                for all file
                types to be securely stor
                ed and shared.
            </p>
        </div>
    )
}
export default Descfiles
