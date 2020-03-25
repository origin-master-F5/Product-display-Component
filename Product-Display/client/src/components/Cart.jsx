import React from 'react';
import CartModal from './CartModal.jsx';



class Cart extends React.Component {
    constructor(props){
        super(props);
        this.cartRef = React.createRef();
        this.state = {
          loading: false,
          show: false
        };

    this.add = this.add.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this);
    }

    add() {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            this.setState({
                loading: false,
                show: true
            })
        }, 800);
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <button type="button" className="display-cart-selected" disabled={this.state.loading}><img className="display-cart-spinner"src="https://media.giphy.com/media/l4FGKbWgkhHVGXzTW/source.gif" height="15"/>Adding</button>
            )
        }
        return (
            <button type="button" className="display-cart-button" disabled={this.state.loading}><i className="display-cart-image ion-android-cart"></i>Add to Cart</button>
            
        )
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutsideModal);
      }
    
      componentWillUnmount() {
        document.addEventListener("mousedown", this.handleClickOutsideModal);
      }

    closeModal() {
        this.setState({
            show:false
        })
    }

    handleClickOutsideModal(e) {
    
        if (this.cartRef.current && !this.cartRef.current.contains(e.target)) {
        this.closeModal();
        }
      }
    
    render() {
   
    return (
        <div>
           <div className="display-pickup-topdivider">
            <div className="display-pickup-addToCart" onClick={this.add} >
               {this.renderButton()}
            </div>
           </div>
           <CartModal show={this.state.show} close={this.closeModal} ref={this.cartRef}/>
        </div>
    )
  }
}

export default Cart;