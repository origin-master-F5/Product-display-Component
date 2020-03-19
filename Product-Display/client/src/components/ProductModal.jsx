import React from 'react';

const ProductModal = (props) => {
    const showHideClassName = props.show ? "modal display-modal-block" : "modal display-modal-none";
    return (
     <div className={showHideClassName}>
         <div className="modal-main">
            MODAL
            <button onClick={() => props.close()}>close</button>
         </div>
     </div>
    )
}

export default ProductModal;