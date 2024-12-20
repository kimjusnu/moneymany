interface LottoNumberDisplayProps {
    number: number[];
}

const NumberColors: { [key: number]: string } = {
    1: "bg-lime-300",
    2: "bg-rose-300",
    3: "bg-amber-300",
    4: "bg-emerald-300",
    5: "bg-cyan-300",
    6: "bg-sky-300",
    7: "bg-fuchsia-300",
    8: "bg-violet-300",
    9: "bg-pink-300",
    10: "bg-lime-400",
    11: "bg-rose-400",
    12: "bg-amber-400",
    13: "bg-emerald-400",
    14: "bg-cyan-400",
    15: "bg-sky-400",
    16: "bg-fuchsia-400",
    17: "bg-violet-400",
    18: "bg-pink-400",
    19: "bg-lime-500",
    20: "bg-rose-500",
    21: "bg-amber-500",
    22: "bg-emerald-500",
    23: "bg-cyan-500",
    24: "bg-sky-500",
    25: "bg-fuchsia-500",
    26: "bg-violet-500",
    27: "bg-pink-500",
    28: "bg-lime-200",
    29: "bg-rose-200",
    30: "bg-amber-200",
    31: "bg-emerald-200",
    32: "bg-cyan-200",
    33: "bg-sky-200",
    34: "bg-fuchsia-200",
    35: "bg-violet-200",
    36: "bg-pink-200",
    37: "bg-lime-600",
    38: "bg-rose-600",
    39: "bg-amber-600",
    40: "bg-emerald-600",
    41: "bg-cyan-600",
    42: "bg-blue-600",
    43: "bg-fuchsia-600",
    44: "bg-violet-300",
    45: "bg-pink-600",
};

const LottoNumberDisplay = ({ number }: LottoNumberDisplayProps) => {
    const getNumberColor = (number: number) => {
        return NumberColors[number];
    };

    return (
        <div className="flex flex-wrap gap-4 mt-4 ">
            {number.map((num, index) => (
                <div
                    key={index}
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl font-semibold text-black shadow-md ${getNumberColor(
                        num
                    )}`}
                >
                    {num}
                </div>
            ))}
        </div>
    );
};

export default LottoNumberDisplay;
