import { useState, useMemo } from 'react';
import { isZero } from './util';
import Input from './Input';
import TipInput from './TipInput';
import TipLine from './TipLine';

function App() {
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState('');
  const [tip, setTip] = useState({
    value: '',
    custom: false
  });

  const tipPerPerson = useMemo(() => {
    return bill===''||people===''||tip.value===''?0:parseFloat(bill)*(parseFloat(tip.value)/100)/(parseFloat(people)==0?1:parseFloat(people));
  }, [bill, people, tip]);

  const totalPerPerson = useMemo(() => {
    return bill===''||people===''||tip.value===''?0:parseFloat(bill)/parseFloat(people)+tipPerPerson;
  },[bill, people, tipPerPerson]);

  const reset = () => {
    setBill('');
    setPeople('');
    setTip({
      value: '',
      custom: false
    });
  };

  return (
    <div className="flex flex-col items-center gap-10 font-bold md:gap-20">
      <img className="mt-12" src="./images/logo.svg" alt="logo" />
      <div className="bg-white rounded-t-3xl py-8 px-6 flex flex-col gap-8 w-full max-w-card shadow-card md:p-8 md:gap-11 md:flex-row md:rounded-3xl">
        <div className="w-full flex flex-col gap-10 px-3 md:gap-11 md:my-4 md:px-0">
          <Input name="bill" placeholder="0" label="Bill" icon="./images/icon-dollar.svg" error={isZero(bill)?'Can\'t be zero':''} onChange={(e) => setBill(e.target.value)} value={bill} />
          <TipInput label="Select Tip %" placeholder="Custom" onChange={setTip} tip={tip} />
          <Input name="number-of-people" placeholder="0" label="Number of People" icon="./images/icon-person.svg" error={isZero(people)?'Can\'t be zero':''} onChange={(e) => setPeople(e.target.value)} value={people} />
        </div>
        <div className="w-full rounded-2xl pt-11 pb-6 px-6 flex flex-col gap-6 bg-very-dark-cyan grow md:gap-12 md:pt-14 md:pb-10 md:px-10">
          <TipLine title="Tip Amount" subtitle="/ person" featured={`$${tipPerPerson.toFixed(2)}`} />
          <TipLine title="Total" subtitle="/ person" featured={`$${totalPerPerson.toFixed(2)}`} />
          <button className="uppercase text-xl bg-strong-cyan text-very-dark-cyan rounded-md w-full py-2 mt-3 md:mt-auto hover:bg-light-grayish-cyan disabled:bg-strong-cyan/15" disabled={bill===''&&tip.value===''&&people===''} onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
