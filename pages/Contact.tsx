import React, { useState } from 'react';
import { Mail, Instagram, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">讓我們一起創造。</h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            無論您是想討論潛在的合作機會、有UI/UX的專案需求，或者只是想交換設計心得，都歡迎與我聯繫。
          </p>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-white/5 p-4 rounded-full mr-6">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">電子郵件</h3>
                <a href="mailto:annikas286@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                  annikas286@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white/5 p-4 rounded-full mr-6">
                <Instagram className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">Instagram</h3>
                <a href="https://www.instagram.com/annikas2868/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  annikas2868
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-card p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">姓名</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="您的姓名"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">電子郵件</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">訊息內容</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                placeholder="請輸入您的訊息..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className={`w-full flex items-center justify-center py-4 rounded-lg font-bold transition-all duration-300 ${
                status === 'success' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-accent text-black hover:bg-white'
              }`}
            >
              {status === 'submitting' ? (
                '傳送中...'
              ) : status === 'success' ? (
                '訊息已發送！'
              ) : (
                <>
                  傳送訊息 <Send className="ml-2" size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;