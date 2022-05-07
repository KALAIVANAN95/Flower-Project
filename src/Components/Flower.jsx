import React from "react";


const Flower = (props) => {
    return (
        <>

            <div className="cards">
                <h2>{props.title}</h2>
                <img src={props.imgsrc} />
                <p>{props.desc}</p>
                    <button>{props.btn}</button>
                <hr />
            </div>



        </>
    )

}

export default Flower;