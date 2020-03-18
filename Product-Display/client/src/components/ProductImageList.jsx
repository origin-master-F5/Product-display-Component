import React from 'react';


class ProductImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     productList: []
    };
  this.renderList = this.renderList.bind(this);
  }

  renderList() {
   if (this.props.items.length > 0) {
    const itemList = this.props.items[0].images;
    return (
        <ul className="display-thumbnail-list">
        {itemList.map((item, index) => (
        <li key={index} className="display-image-thumbnail">
          <div  className={"display-thumbnail-container"}>
            <button className="display-image-button">
                <img className="display-individual-images" src={item}/>
            </button>
          </div>
         </li>
        ) )}
      </ul> 
    )
   }
    
  }

  render() {
      
    return (
     <div>
       {this.renderList()}
     </div>
    )
  }
}

export default ProductImageList;