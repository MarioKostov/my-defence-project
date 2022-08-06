export const CarsSection = () => {
    return (
        <div className="latestcars">
            <h1 className="text-center">&bullet;LATEST CARS &bullet;</h1>
            <ul className="nav nav-tabs navbar-left latest-navleft">
                <li role="presentation" className="li-sortby"><span className="sortby">SORT BY: </span></li>
                <li data-filter=".RECENT" role="presentation"><a href="#mostrecent" className="prcBtnR">MOST RECENT </a>
                </li>
                <li data-filter=".POPULAR" role="presentation"><a href="#mostpopular" className="prcBtnR">MOST POPULAR </a>
                </li>
                <li role="presentation"><a href="#" className="alphSort">ALPHABETICAL </a></li>
                <li data-filter=".HPRICE" role="presentation"><a href="#" className="prcBtnH">HIGHEST PRICE </a></li>
                <li data-filter=".LPRICE" role="presentation"><a href="#" className="prcBtnL">LOWEST PRICE </a></li>
                <li id="hideonmobile" />
            </ul>
        </div>

    );
}