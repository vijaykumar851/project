import { Phone } from 'lucide-react'

export default function Messages({
  selectedChatFarmer = 'Raman Reddy',
  setSelectedChatFarmer,
  chatMessages = {},
  inputMsg = '',
  setInputMsg,
  handleSendMessage,
  showToast,
}) {
  const farmerList = ['Raman Reddy', 'Srinivas Rao', 'Anil Kumar']

  return (
    <div className="bg-white rounded-2xl border border-[#e2e8e2] shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
      {/* Thread list */}
      <div className="md:col-span-4 border-r border-[#e2e8e2] p-3 space-y-2">
        <h3 className="text-xs font-bold text-[#0f172a] px-2 py-1">Farmer Conversations</h3>
        {farmerList.map((farmer) => (
          <button
            key={farmer}
            type="button"
            onClick={() => setSelectedChatFarmer && setSelectedChatFarmer(farmer)}
            className={`w-full text-left p-2.5 rounded-xl transition flex items-center gap-2.5 ${
              selectedChatFarmer === farmer ? 'bg-[#e8f5e9] text-[#1b7f45]' : 'hover:bg-slate-50 text-[#0f172a]'
            }`}
          >
            <div className="h-8 w-8 rounded-full bg-[#1b7f45] text-white flex items-center justify-center font-bold text-xs shrink-0">
              {farmer.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold truncate">{farmer}</p>
              <p className="text-[10px] text-[#64748b] truncate">
                {chatMessages[farmer]?.[chatMessages[farmer].length - 1]?.text || 'No messages yet'}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Chat View */}
      <div className="md:col-span-8 flex flex-col justify-between p-4">
        <div className="pb-3 border-b border-[#f1f5f9] flex items-center justify-between">
          <div>
            <h4 className="text-sm font-bold text-[#0f172a]">{selectedChatFarmer}</h4>
            <p className="text-[10px] text-[#16a34a] font-medium">● Online · Certified Farmer Client</p>
          </div>
          <button
            type="button"
            onClick={() => showToast && showToast(`Calling ${selectedChatFarmer} (+91 98480 32190)...`)}
            className="p-2 text-[#1b7f45] hover:bg-[#e8f5e9] rounded-xl transition"
            title="Call Farmer"
          >
            <Phone className="h-4 w-4" />
          </button>
        </div>

        <div className="py-4 space-y-3 flex-1 overflow-y-auto max-h-[360px]">
          {chatMessages[selectedChatFarmer]?.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.sender === 'You' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-xs ${
                  msg.sender === 'You'
                    ? 'bg-[#1b7f45] text-white rounded-br-none'
                    : 'bg-[#f1f6f1] text-[#0f172a] rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[9px] text-[#94a3b8] mt-0.5 px-1">{msg.time}</span>
            </div>
          ))}
        </div>

        <div className="pt-3 border-t border-[#f1f5f9] flex items-center gap-2">
          <input
            type="text"
            placeholder={`Message ${selectedChatFarmer}...`}
            value={inputMsg}
            onChange={(e) => setInputMsg && setInputMsg(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && handleSendMessage) handleSendMessage()
            }}
            className="flex-1 px-4 py-2 text-xs bg-[#f8faf8] border border-[#e2e8e2] rounded-full focus:bg-white focus:outline-none focus:border-[#1b7f45]"
          />
          <button
            type="button"
            onClick={handleSendMessage}
            className="px-4 py-2 bg-[#1b7f45] text-white rounded-full text-xs font-semibold hover:bg-[#146235] transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
