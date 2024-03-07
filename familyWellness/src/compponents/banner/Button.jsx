function Button({name}){
    return(
        <>
            <div className="btn" >
                <button style={{
                    padding : "15px 20px",
                    backgroundColor : "transparent",
                    border : "2px solid white",
                    
                }}>{name}</button>
            </div>
        </>
    );
}

export default Button;