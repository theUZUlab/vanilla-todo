import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/sub-logo.svg';

export default function Login() {
  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* 메인 컨테이너 */}
      <section
        className="relative w-[1000px] h-[600px] shadow-lg rounded-lg overflow-hidden flex"
        aria-labelledby="login-section"
      >
        {/* 대각선 검은색 부분 */}
        <div
          className="absolute top-0 left-0 w-3/5 h-full bg-gray-900"
          style={{ clipPath: 'polygon(0% 0%, 100% 0%, 60% 100%, 0% 100%)' }}
        ></div>

        {/* 검은색 텍스트 영역 */}
        <aside
          className="absolute top-0 left-0 w-2/5 h-full text-white pt-24 pl-16 z-10"
          aria-labelledby="welcome-text"
        >
          <h1 id="welcome-text" className="text-3xl font-bold">
            <Image
              src={Logo}
              width={276}
              height={86}
              alt="UZU's Todo 로고"
              className="logo mb-10"
            />
            <span className="sr-only">UZU's Todo</span>
          </h1>
          <p className="text-light-gray text-lg font-bold">
            쉽고 직관적인 투두리스트로 <br /> 더 나은 하루를 만들어보세요.
          </p>
        </aside>

        {/* 오른쪽 폼 영역 */}
        <article className="ml-auto w-2/5 h-full pt-32 pr-16 bg-white z-10">
          <header>
            <h2
              id="login-section"
              className="mb-11 text-3xl font-bold text-dark-gray text-center"
            >
              Login
            </h2>
          </header>
          <form>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="mb-3 w-full px-4 py-2 border-2 border-light-gray rounded-xl text-base font-medium focus:border-dark-gray focus:outline-none"
            />

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border-2 border-light-gray rounded-xl text-base font-medium focus:border-dark-gray focus:outline-none"
            />

            <button
              type="submit"
              className="mt-28 mb-3 w-full bg-light-gray text-white font-bold py-2 rounded-2xl hover:bg-dark-gray transition"
            >
              Login
            </button>
          </form>
          <footer>
            <p className="text-center text-sm text-light-gray">
              계정이 없으신가요?{' '}
              <Link
                href="/auth/signup"
                className="text-light-gray font-medium hover:text-dark-gray hover:underline transition"
              >
                회원가입
              </Link>
            </p>
          </footer>
        </article>
      </section>
    </main>
  );
}
