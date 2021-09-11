import React from 'react'

const HomeCmp = () => {
    return (
        <>
            <div className="boxlist">
                <div className="box">
                    <img src="src/Views/Home/image.jpg" alt="" className="box-img" />
                    <div className="box-content">
                        <p className="box-rating">* 8.5</p>
                        <h5 className="box-heading">Fruit name</h5>
                        <div className="box-footer">
                            <button className="box-btn">Add to cart</button>
                            <span className="box-cost">$234</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCmp
