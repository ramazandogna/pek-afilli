'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '../../types/comment';
import { ThreeDot } from '../../public/icons/threeDot';
import { Check } from '../../public/icons/check';

export default function WriteComment() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    comment: '',
    collectEmail: false
  });
  const [collectEmail, setCollectEmail] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [mailSending, setMailSending] = useState(false);

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
    setMailSending(true);
    e.preventDefault();

    setTimeout(() => {
      if (isFormValid) {
        // Formu sıfırla
        setFormData({
          name: '',
          email: '',
          comment: '',
          collectEmail: false
        });
        setIsFormValid(false);
        setMailSending(false);
        setCommentOpen(false);
      }
    }, 1500);
  };

  if (mailSending) {
    return (
      <div className="flex h-[45px] w-full items-center justify-center">
        <ThreeDot className="text-[40px] opacity-85" />
      </div>
    );
  }

  return (
    <>
      {!commentOpen ? (
        <div
          onClick={() => {
            setCommentOpen(!commentOpen);
          }}
          className="h-[45px] w-full text-[14px]"
        >
          <textarea
            id="comment"
            name="comment"
            placeholder="Yorum ekleyin..."
            className="h-full w-full grow resize-none rounded bg-white p-2"
            required
          />
        </div>
      ) : (
        <form className="flex flex-col gap-[8px] text-[14px]" onSubmit={handleSubmit}>
          <div className="flex gap-[8px]">
            <div className="grow">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="İsim"
                onChange={handleInputChange}
                required
                className="w-full rounded p-2"
              />
            </div>
            <div className="grow">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="E-posta"
                onChange={handleInputChange}
                required
                className="w-full rounded p-2"
              />
            </div>
          </div>
          <div className="flex h-[80px] w-full">
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              placeholder="Yorum ekleyin..."
              onChange={handleInputChange}
              className="roundedp-2 h-full w-full grow resize-none bg-white"
              required
            />
          </div>
          <div className="flex items-center  justify-start bg-white  p-2">
            <div
              onClick={() => setCollectEmail(!collectEmail)}
              className="flex cursor-pointer items-center gap-[8px] rounded bg-white"
            >
              <span className="flex h-[16px] w-[16px] items-center justify-center overflow-hidden rounded border-[1px] border-black/50 bg-white">
                <Check className={`${collectEmail ? 'block' : 'hidden'} text-[16px]`}></Check>
              </span>
              <div className="text-[12px] text-black/50">
                <span className="hidden md:block">yeni paylaşımlarla ilgili e-posta al.</span>
                <span className="md:hidden">E-posta listemize kaydol</span>
              </div>
            </div>
            <button
              className=" transition-color ml-auto mr-[8px] cursor-pointer rounded px-[12px] py-[6px] text-[13px] text-black hover:bg-[rgba(0,_0,_0,_0.05)]"
              onClick={() => setCommentOpen(!commentOpen)}
            >
              Geri
            </button>
            <button
              className=" transition-color cursor-pointer rounded bg-blue-500/85 px-[12px] py-[6px] text-[13px] text-white hover:bg-blue-500/90 active:bg-blue-500 disabled:pointer-events-none disabled:bg-[rgba(0,_0,_0,_0.05)] disabled:text-[9] "
              type="submit"
              disabled={!isFormValid}
            >
              Yorum Yap
            </button>
          </div>
        </form>
      )}
    </>
  );
}
