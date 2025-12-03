import React, { useState } from 'react';
import './ContactModal.css';

function ContactModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // バリデーション
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('名前とメッセージを入力してください');
      return;
    }

    // 親コンポーネントに送信処理を委譲
    if (onSubmit) {
      onSubmit(formData);
    }

    // フォームをリセット
    setFormData({ name: '', message: '' });
  };

  const handleClose = () => {
    setFormData({ name: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose} aria-label="閉じる">
          ×
        </button>

        <h2 className="modal-title">開発者へメッセージ</h2>
        <p className="modal-description">
          ほかSNSを通じて返信を返すかもしれないです。
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">名前</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="偽名可"
              maxLength={50}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">メッセージ</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="ご意見要望、人生相談何でもいいです。"
              rows={6}
              maxLength={1000}
              required
            />
            <span className="char-count">
              {formData.message.length} / 1000
            </span>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="btn-submit"
            >
              送信する
            </button>
            <button
              type="button"
              onClick={handleClose}
              className="btn-cancel"
            >
              キャンセル
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
