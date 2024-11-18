const CreateNumberButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <div>
            <button onClick={onClick}>로또 번호 추첨</button>
        </div>
    );
};

export default CreateNumberButton;
