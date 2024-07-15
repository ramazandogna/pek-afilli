'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '../../types/comment';

export default function CommentForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    comment: '',
    collectEmail: false
  });
  const [collectEmail, setCollectEmail] = useState(false);

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value
    };
    setFormData(updatedFormData);

    // Form validasyonunu kontrol et
    setIsFormValid(
      updatedFormData.firstName.trim() !== '' &&
        updatedFormData.lastName.trim() !== '' &&
        updatedFormData.email.trim() !== '' &&
        updatedFormData.comment.trim() !== ''
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log(formData);
      // Formu sıfırla
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        comment: '',
        collectEmail: false
      });
      setIsFormValid(false);
    }
  };

  console.log(collectEmail);

  return (
    <form className="gap-8px flex flex-col" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Ad:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Soyad:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">E-posta:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="comment">Yorum:</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label>
          <span
            onClick={() => setCollectEmail(!collectEmail)}
            className="w-16px h-16px border-1.5px flex items-center justify-center overflow-hidden rounded border-black bg-transparent"
          >
            <div className={`i-ph:check-bold ${collectEmail ? 'block' : 'hidden'} text-16px`}></div>
          </span>
        </label>
      </div>
      <button type="submit" disabled={!isFormValid}>
        Gönder
      </button>
    </form>
  );
}
