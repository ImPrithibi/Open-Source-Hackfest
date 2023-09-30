import '../Components.css'


function Button({status, onClick}){
    return (
        <div className="button">
            <button className={status} onClick={onClick}>
            {status}
            </button>
        </div>
    )

}

export default Button