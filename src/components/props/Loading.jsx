import React from 'react';
import {
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

import loading from "../../utils/all_other_photos/loading.png"

function Loading() {
    return (
        < MDBCarouselItem
            className='w-100 d-block'
            itemId={0}
            src={loading}
            style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
            alt="loading"
        >
        </MDBCarouselItem>)

}

export default Loading