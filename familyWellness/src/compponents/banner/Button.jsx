function Button({name}){
    return(
        <>
            <div className="btn" >
                <button style={{
                    padding : "10px 30px",
                    margin: "15px",
                    backgroundColor : "transparent",
                    border : "2px solid white",
                    color : "white"
                }}>{name}</button>
            </div>
        </>   
    );
}

export default Button;