const ErrorModal = ({ error, setError }: any) => {
    return (
        <div className="bg-black/40 fixed inset-0 h-screen w-full flex items-center justify-center">
            <div className="bg-red-100 rounded-xl w-96 p-3 flex flex-col">
                <p className="text-red-500 text-center">{error}</p>
                <button className="hover:bg-red-300 hover:text-white rounded-xl p-2 duration-300 mt-2"
                    onClick={()=>setError("")}
                >
                    Ok
                </button>
            </div>
        </div>
    )
}

export default ErrorModal;