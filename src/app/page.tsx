"use client";

import { useState, useEffect } from "react";
import LottoNumberDisplay from "./components/LottoNumberDisplay";
import CreateNumberButton from "./components/CreateNumberButton";
import { CreateNumber } from "@/utils/CreateNumber";

const Page = () => {
    const [number, setNumber] = useState<number[]>([]);

    useEffect(() => {
        setNumber(CreateNumber());
    }, []);

    const handleCreateNumber = () => {
        setNumber(CreateNumber());
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">로또 번호 생성</h1>
            <LottoNumberDisplay number={number} />
            <CreateNumberButton onClick={handleCreateNumber} />
        </div>
    );
};

export default Page;
