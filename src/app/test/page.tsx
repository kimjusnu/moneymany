import LottoNumberDisplay from "@/app/components/LottoNumberDisplay";

const page = () => {
    return (
        <div>
            <h1>LottoNumberDisplay Test</h1>
            <LottoNumberDisplay
                number={Array.from({ length: 45 }, (_, i) => i + 1)}
            />
        </div>
    );
};

export default page;
