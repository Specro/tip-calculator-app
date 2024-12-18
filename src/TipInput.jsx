import Button from './Button';
import { isZero } from './util';

const tips = [5, 10, 15, 25, 50];

export default function TipInput({ label, placeholder, onChange, tip }) {
    const handleCustomTip = e => {
        onChange(parseInt(e.target.value===''?0:e.target.value));
        onChange({
            value: e.target.value,
            custom: true
        });
    };

    const handleTip = value => {
        onChange({
            value,
            custom: false
        });
    };

    return (
        <div className="">
            <div className="flex justify-between items-center mb-2">
                <label htmlFor="tip" className="text-dark-grayish-cyan block">{label}</label>
                {isZero(tip.value) ?
                    <span className="text-red">Can't be zero</span>
                :''}
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {tips.map(value => (
                    <Button title={`${value}%`} active={tip.value===value&&!tip.custom} onClick={() => handleTip(value)} key={value} />
                ))}
                <input className={`bg-very-light-grayish-cyan text-very-dark-cyan text-2xl font-bold text-right w-full rounded-md pr-5 pl-10 py-2 hover:outline-2 hover:outline-green focus-visible:outline-2 focus-visible:outline-green ${isZero(tip.value)?'outline outline-red':''}`} onChange={handleCustomTip} value={tip.custom?tip.value:''} id="tip" type="number" placeholder={placeholder} />
            </div>
        </div>
    );
}