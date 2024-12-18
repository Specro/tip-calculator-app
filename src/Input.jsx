export default function Input({ placeholder, name, label, icon, error, value, onChange }) {
    return (
        <div className="">
            <div className="flex justify-between items-center mb-2">
                <label htmlFor={name} className="text-dark-grayish-cyan block">{label}</label>
                {error ?
                    <span className="text-red">{error}</span>
                :''}
            </div>
            <div className="flex items-center relative">
                <img className="absolute left-5" src={icon} alt="icon" />
                <input className={`bg-very-light-grayish-cyan text-very-dark-cyan text-2xl font-bold text-right w-full rounded-md pr-5 pl-10 py-2 hover:outline-green hover:outline-2 focus-visible:outline-2 focus-visible:outline-green ${error?'outline outline-red':''}`} onChange={onChange} value={value} id={name} type="number" placeholder={placeholder} />
            </div>
        </div>
    );
}