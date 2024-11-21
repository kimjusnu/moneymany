"use client";

import { useState, useEffect } from "react";
import LottoNumberDisplay from "./components/LottoNumberDisplay";
import CreateNumberButton from "./components/CreateNumberButton";
import { CreateNumber } from "@/utils/CreateNumber";
import LuckyNumber from "./components/LuckyNumber";
const Page = () => {
    const [number, setNumber] = useState<number[]>([]);

    useEffect(() => {
        setNumber(CreateNumber());
    }, []);

    const handleCreateNumber = () => {
        setNumber(CreateNumber());
    };

    return (
        <div className="min-h-screen flex  flex-col items-center justify-center bg-gradient p-6">
            <h1 className="text-3xl font-bold text-slate-100 mb-4">
                로또 번호 생성기
            </h1>
            <LottoNumberDisplay number={number} />
            <CreateNumberButton onClick={handleCreateNumber} />
            <hr />
            <LuckyNumber />
        </div>
    );
};

export default Page;
