export default function TipLine({ title, subtitle, featured }) {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-white">{title}</span>
              <span className="text-grayish-cyan text-sm">{subtitle}</span>
            </div>
            <span className="text-strong-cyan text-4xl md:text-5xl">{featured}</span>
        </div>
    );
}