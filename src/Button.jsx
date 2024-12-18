export default function Button({ active, onClick, title }) {
    return (
        <button className={`py-2 text-center text-2xl rounded-md hover:bg-light-grayish-cyan hover:text-very-dark-cyan ${active?'bg-strong-cyan text-very-dark-cyan':'bg-very-dark-cyan text-white'}`} onClick={onClick}>{title}</button>
    );
}