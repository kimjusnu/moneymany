interface LottoNumberDisplayProps {
    number: number[];
}

const LottoNumberDisplay = ({ number }: LottoNumberDisplayProps) => {
    return (
        <div>
            {number.map((number, index) => (
                <div key={index} className="">
                    {index + 1}번째 번호: {number}
                </div>
            ))}
        </div>
    );
};

export default LottoNumberDisplay;
