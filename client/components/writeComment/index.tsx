'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { ThreeDot } from '../../public/icons/threeDot';
import { Check } from '../../public/icons/check';
import { motion } from 'framer-motion';

export default function WriteComment({ postId }: { postId: number }) {
  const [author, setAuthor] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState('');

  const [collectEmail, setCollectEmail] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [mailSending, setMailSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMailSending(true);

    // Form elemanlarının doğru özellik isimlerine dikkat et
    let data = {
      author: author,
      authorEmail: authorEmail,
      content: content.replace(/\n/g, '\\n'),
      postId: postId
    };

    const jsonData = JSON.stringify(data);

    const response = await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    const result = await response.json();

    setTimeout(() => {
      if (isFormValid) {
        setIsFormValid(false);
        setMailSending(false);
        setCommentOpen(false);
      }
    }, 1500);

    return result;
  };

  if (mailSending) {
    return (
      <div className="flex h-[45px] w-full items-center justify-center">
        <ThreeDot className="text-[40px] opacity-85" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileInView="animate"
      viewport={{ once: true }}
    >
      {!commentOpen ? (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{ once: true }}
          onClick={() => setCommentOpen(!commentOpen)}
          className="h-[45px] w-full text-[14px]"
        >
          <textarea
            id="comment"
            name="content"
            placeholder="Yorum ekleyin..."
            className="h-full w-full grow resize-none rounded bg-white p-2"
            required
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
          />
        </motion.div>
      ) : (
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col gap-[8px] text-[14px]"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-[8px]">
            <div className="grow">
              <input
                type="text"
                id="name"
                name="author"
                placeholder="İsim"
                required
                className="w-full rounded p-2"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
              />
            </div>
            <div className="grow">
              <input
                type="email"
                id="email"
                name="authorEmail"
                placeholder="E-posta"
                required
                className="w-full rounded p-2"
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthorEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex h-[80px] w-full">
            <textarea
              id="comment"
              name="content"
              placeholder="Yorum ekleyin..."
              className="h-full w-full grow resize-none rounded bg-white p-2"
              required
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-start bg-white p-2">
            <div
              onClick={() => setCollectEmail(!collectEmail)}
              className="flex cursor-pointer items-center gap-[8px] rounded bg-white"
            >
              <span className="flex h-[16px] w-[16px] items-center justify-center overflow-hidden rounded border-[1px] border-black/50 bg-white">
                <Check className={`${collectEmail ? 'block' : 'hidden'} text-[16px]`} />
              </span>
              <div className="text-[12px] text-black/50">
                <span className="hidden md:block">yeni paylaşımlarla ilgili e-posta al.</span>
                <span className="md:hidden">E-posta listemize kaydol</span>
              </div>
            </div>
            <button
              className="transition-color ml-auto mr-[8px] cursor-pointer rounded px-[12px] py-[6px] text-[13px] text-black hover:bg-[rgba(0,_0,_0,_0.05)]"
              onClick={() => setCommentOpen(!commentOpen)}
            >
              Geri
            </button>
            <button
              className={`${!isFormValid ? 'text-black/50' : 'text-white'} transition-color cursor-pointer rounded bg-blue-500/85 px-[12px] py-[6px] text-[13px] hover:bg-blue-500/90 active:bg-blue-500 disabled:pointer-events-none disabled:bg-[rgba(0,_0,_0,_0.05)] disabled:text-[9] `}
              type="submit"
            >
              Yorum Yap
            </button>
          </div>
        </motion.form>
      )}
    </motion.div>
  );
}
