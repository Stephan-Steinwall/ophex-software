import React from 'react'

const Chat = ({text = "Let's Chat"}) => {
    return (
        <div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition-colors">
                {text}
            </button>
        </div>
    )
}

export default Chat