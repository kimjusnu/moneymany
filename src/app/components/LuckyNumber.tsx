import { CreateNumber } from "@/utils/CreateNumber";

interface LuckyNumberProps {
    number: number;
    mean: string;
}

const LuckyNumberData: LuckyNumberProps[] = [
    { number: 1, mean: "시작" },
    { number: 2, mean: "균형" },
    { number: 3, mean: "완벽함" },
    { number: 4, mean: "안정" },
    { number: 5, mean: "모험" },
    { number: 6, mean: "조화" },
    { number: 7, mean: "행운" },
    { number: 8, mean: "축복" },
    { number: 9, mean: "끝과 새 시작" },
    { number: 10, mean: "완전함" },
    { number: 11, mean: "통찰력" },
    { number: 12, mean: "조화로운 주기" },
    { number: 13, mean: "의외의 기회" },
    { number: 14, mean: "성장" },
    { number: 15, mean: "지혜" },
    { number: 16, mean: "강한 의지" },
    { number: 17, mean: "영감" },
    { number: 18, mean: "부와 번영" },
    { number: 19, mean: "야망" },
    { number: 20, mean: "성실함" },
    { number: 21, mean: "행운의 반복" },
    { number: 22, mean: "대담함" },
    { number: 23, mean: "유연성" },
    { number: 24, mean: "성공적인 변화" },
    { number: 25, mean: "결단력" },
    { number: 26, mean: "행운과 도전" },
    { number: 27, mean: "인내심" },
    { number: 28, mean: "사업적 성공" },
    { number: 29, mean: "창의성" },
    { number: 30, mean: "돈" },
    { number: 31, mean: "독립" },
    { number: 32, mean: "기회" },
    { number: 33, mean: "축복과 희망" },
    { number: 34, mean: "결실" },
    { number: 35, mean: "행운과 성취" },
    { number: 36, mean: "성공" },
    { number: 37, mean: "도전과 성취" },
    { number: 38, mean: "전략적 사고" },
    { number: 39, mean: "재능" },
    { number: 40, mean: "안정된 기반" },
    { number: 41, mean: "긍정적인 변화" },
    { number: 42, mean: "금" },
    { number: 43, mean: "희망" },
    { number: 44, mean: "행복" },
    { number: 45, mean: "성취" },
];

const LuckyNumber = () => {
    const selectedNumbers = CreateNumber();
    console.log("선택된 번호: ", selectedNumbers); // 테스트 코드

    const sliceArray = (array: LuckyNumberProps[], size: number) => {
        const sliced = [];
        for (let i = 0; i < array.length; i += size) {
            sliced.push(array.slice(i, i + size));
        }
        return sliced;
    };

    const chunkedData = sliceArray(LuckyNumberData, 5); // 5개씩 나누어 배열 생성

    return (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl text-center font-bold mb-4">
                각 숫자에 담긴 의미
            </h2>

            <table className="w-full table-auto border-collapse">
                <tbody>
                    {chunkedData.map((chunk, rowIndex) => (
                        <tr key={rowIndex} className="bg-gray-100">
                            {chunk.map(item => {
                                // 선택된 번호의 색상 적용

                                return (
                                    <td
                                        key={item.number}
                                        className={`border px-4 py-2 text-center `}
                                    >
                                        <div>{item.number}</div>
                                        <div className="text-sm">
                                            {item.mean}
                                        </div>
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LuckyNumber;
