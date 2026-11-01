import { useTranslation } from '../../context/LanguageContext.jsx'

export default function MessagesTab({
  chatMessages,
  selectedChatTenant,
  setSelectedChatTenant,
  inputMsg,
  setInputMsg,
  handleSendMessage,
}) {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-2xl border border-[#e2e8e2] shadow-sm flex h-[500px] overflow-hidden">
      {/* Chat Sidebar */}
      <div className="w-64 border-r border-[#e2e8e2] bg-[#f8faf8] p-3 space-y-1">
        <h3 className="text-xs font-bold text-[#0f172a] mb-2 px-2">{t('dashTabMessagesTitle')}</h3>
        {['Suresh Kumar', 'Lakshmi Devi', 'Ravi Teja'].map((tName) => (
          <button
            key={tName}
            type="button"
            onClick={() => setSelectedChatTenant(tName)}
            className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition ${
              selectedChatTenant === tName
                ? 'bg-white shadow-sm border border-[#e2e8e2] text-[#1b7f45]'
                : 'text-[#475569] hover:bg-white/60'
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
            {tName}
          </button>
        ))}
      </div>

      {/* Chat Conversation */}
      <div className="flex-1 flex flex-col justify-between p-4">
        <div className="border-b border-[#f1f5f9] pb-2 flex items-center justify-between">
          <h4 className="text-xs font-bold text-[#0f172a]">{selectedChatTenant}</h4>
          <span className="text-[10px] text-[#16a34a] font-bold">{t('dashOnlineTenant')}</span>
        </div>

        <div className="flex-1 overflow-y-auto py-3 space-y-2">
          {(chatMessages[selectedChatTenant] || []).map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === 'You' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`px-3 py-2 rounded-xl text-xs max-w-sm ${
                  m.sender === 'You' ? 'bg-[#1b7f45] text-white' : 'bg-[#f1f5f9] text-[#0f172a]'
                }`}
              >
                {m.text}
              </div>
              <span className="text-[9px] text-[#94a3b8] mt-0.5">{m.time}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="flex gap-2 pt-2 border-t border-[#f1f5f9]">
          <input
            type="text"
            placeholder={t('dashTypeMessage')}
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            className="flex-1 px-3 py-1.5 text-xs bg-[#f8faf8] border border-[#e2e8e2] rounded-lg focus:outline-none focus:border-[#1b7f45]"
          />
          <button
            type="submit"
            className="px-4 py-1.5 bg-[#1b7f45] text-white text-xs font-bold rounded-lg shadow-sm hover:bg-[#146235] transition"
          >
            {t('dashSend')}
          </button>
        </form>
      </div>
    </div>
  )
}
