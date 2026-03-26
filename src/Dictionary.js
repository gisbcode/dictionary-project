
import "./Dictionary.css";

export default function Dictionary() {

    function Search(event) {
        event.preventdefault();
        alert("Searching");
    }


    return (
        <div className="Dictionary">
            <form onSubmit={Search}>
                <input type="search" autoFocus={true} />
            </form>
        </div>
    );


}