interface LottoNumberDisplayProps {
    number: number[];
}

const LottoNumberDisplay = ({ number }: LottoNumberDisplayProps) => {
    return (
        <div>
            {number.map((number, index) => (
                <div key={index} className="">
                    {number}
                </div>
            ))}
        </div>
    );
};

export default LottoNumberDisplay;
