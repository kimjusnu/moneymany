"use client"; // 클라이언트 컴포넌트로 설정

import LottoNumberDisplay from "@/app/components/LottoNumberDisplay";
import CreateNumberButton from "../components/CreateNumberButton";
import { useState, useEffect } from "react";
import { CreateNumber } from "@/utils/CreateNumber";

const Page = () => {
    const [number, setNumber] = useState<number[]>([]);
    useEffect(() => {
        setNumber(CreateNumber);
    }, []);
    const handleCreateNumber = () => {
        setNumber(CreateNumber());
    };

    return (
        <div>
            <h1>LottoNumberDisplay Test</h1>
            <LottoNumberDisplay number={number} />
            <CreateNumberButton onClick={handleCreateNumber} />
        </div>
    );
};

export default Page;
