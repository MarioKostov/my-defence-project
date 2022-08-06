export const NewsLetter = () => {
    return (
        <div className="newslettercontent">
            <div className="leftside">
                <img src="image/border.png" alt="border" />
                <h1>NEWSLETTER</h1>
                <p>Subscribe to the COLLECTIONCARS mailing list to
                    receive updates on new arrivals, special offers
                    and other discount information.</p>
            </div>
            <div className="rightside">
                <img className="newsimage" src="image/newsletter.jpg" alt="newsletter" />
                <input type="text" className="form-control" id="subemail" placeholder="EMAIL" />
                <button>SUBSCRIBE</button>
            </div>
        </div>
    );
}