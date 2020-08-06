import React, {useState} from 'react'

const Modal = () => {

    const [modalState, setModalState] = useState(false);

    const toggleModalState = () => {
      setModalState(!modalState)
    }

    return(
        <div className="appWrapInner">
            <div className={`modalBackground modalActive-${modalState}`}>
                <div className="modalInner">
                    <div className="modalImg">
                        <img src="https://images.unsplash.com/photo-1596555867901-b92225c4eb73?ixlib=rb-1.2.1
                        &ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="modalPic"/>
                    </div>
                    <div className="modalTxt">
                        <h2>This is a modal header</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <form action="">
                            <button>Join now!</button>
                        </form>
                    </div>
                    <div className="closeButton">
                        <button onClick={() => toggleModalState()}>X</button>
                    </div>
                </div>
            </div>
            <button onClick={() => toggleModalState()}>Open modal</button>
        </div>
    )
}

export default Modal