'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '../../types/comment';

export default function CommentForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
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
      updatedFormData.name.trim() !== '' &&
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
        name: '',
        email: '',
        comment: '',
        collectEmail: false
      });
      setIsFormValid(false);
    }
  };

  console.log(collectEmail);

  return (
    <form
      className="gap-8px text-14px flex flex-col [&_input]:rounded [&_input]:p-2 [&_textarea]:rounded [&_textarea]:p-2"
      onSubmit={handleSubmit}
    >
      <div className="gap-8px flex [&_div]:grow [&_input]:w-full">
        <div className="">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="İsim"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="E-posta"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="h-80px flex w-full">
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          placeholder="Yorum"
          onChange={handleInputChange}
          className="h-full w-full grow bg-white"
          required
        />
      </div>
      <div className="gap-8px flex items-center">
        <span
          onClick={() => setCollectEmail(!collectEmail)}
          className="w-16px h-16px border-1px flex cursor-pointer items-center justify-center overflow-hidden rounded border-black/50 bg-white"
        >
          <div className={`i-ph:check-bold ${collectEmail ? 'block' : 'hidden'} text-16px`}></div>
        </span>
        <div className="text-12px text-black/50">yeni paylaşımlardan haberdar olmamı sağla.</div>
      </div>
      <button type="submit" disabled={!isFormValid}>
        Gönder
      </button>
    </form>
  );
}
