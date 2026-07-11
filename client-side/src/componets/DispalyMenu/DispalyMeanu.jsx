import './DisplayMenu.scss';

const DisplayMenu = ()=>{
    return(
        <div className="DisplayMenu">
            <div className="DisplayMenuContainer">
                <div className="searchContainer">
                 <h1>All offer from angla, addis abeba </h1>
                  <div className="searchIdentifire">
                    <p>search...</p>
                  </div>
                </div>
                <div className="menuContainer">
                    <div className="menuOption">
                        <ul>
                            <li>Burger</li>
                            <li>Shawarma</li>
                            <li>Pizza</li>
                            <li>Ice Cream</li>
                            <li> coca</li>
                            <li>fries</li>
                        </ul>
                    </div>
                    <div className="menuDisplayed">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default DisplayMenu;