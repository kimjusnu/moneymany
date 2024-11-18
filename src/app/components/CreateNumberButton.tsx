const CreateNumberButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className="mt-6">
            <button
                onClick={onClick}
                className="px-6 py-3 bg-slate-400 text-white rounded-full shadow-md hover:shadow-lg hover:bg-slate-500 focus:outline-none transition duration-200"
            >
                로또 번호 생성
            </button>
        </div>
    );
};

export default CreateNumberButton;
