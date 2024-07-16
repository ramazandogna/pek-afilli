'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FormData } from '../../types/comment';

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
        console.log(formData);
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
    }, 2500);
  };

  console.log(collectEmail, 'comment open:', commentOpen);

  if (mailSending) {
    return (
      <div className="h-45px flex w-full items-center justify-center">
        <div className="i-eos-icons:three-dots-loading text-40px opacity-85"></div>
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
          className="h-45px text-14px w-full"
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
              placeholder="Yorum ekleyin..."
              onChange={handleInputChange}
              className="h-full w-full grow resize-none bg-white"
              required
            />
          </div>
          <div className="flex items-center justify-center bg-white p-2  md:justify-start">
            <div
              onClick={() => setCollectEmail(!collectEmail)}
              className="gap-8px flex cursor-pointer items-center rounded bg-white"
            >
              <span className="w-16px h-16px border-1px flex items-center justify-center overflow-hidden rounded border-black/50 bg-white">
                <div
                  className={`i-ph:check-bold ${collectEmail ? 'block' : 'hidden'} text-16px`}
                ></div>
              </span>
              <div className="text-12px text-black/50">yeni paylaşımlarla ilgili e-posta al.</div>
            </div>
            <button
              className=" px-12px mr-8px py-6px text-13px transition-color cursor-pointer rounded text-black hover:bg-[rgba(0,_0,_0,_0.05)] md:ml-auto"
              onClick={() => setCommentOpen(!commentOpen)}
            >
              Geri
            </button>
            <button
              className=" px-12px py-6px text-13px disabled:text-#909090 transition-color bg-blue/85 hover:bg-blue/90 active:bg-blue cursor-pointer rounded text-white disabled:pointer-events-none disabled:bg-[rgba(0,_0,_0,_0.05)] "
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
