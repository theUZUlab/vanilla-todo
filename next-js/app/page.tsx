'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/images/main-logo.svg';

export default function Home() {
  const router = useRouter();

  return (
    <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl">
      <header className="">
        <h1 className="flex flex-col items-center mb-6">
          <Image
            src={Logo}
            width={368}
            height={110}
            alt="UZU's Todo 로고"
            className="logo mb-6"
          />
          <span className="lg:text-3xl md:text-2xl sm:text-base font-bold">
            UZU's Todo에 오신 것을 환영합니다
          </span>
        </h1>
      </header>

      <section className="text-center">
        <p>UZU's Todo는 간단하고 강력한 투두리스트 애플리케이션입니다.</p>
        <p>
          저희는 복잡한 기능 없이, 할 일을 빠르게 추가하고 간편하게 관리하는
          것에 초점을 맞추었습니다.
        </p>
        <p>
          개인 업무, 학업, 프로젝트 등 다양한 상황에서 쉽게 사용할 수 있도록
          설계된 도구입니다.
        </p>
      </section>

      <section className="text-left my-12">
        <h2 className="text-title mb-4">주요 기능</h2>
        <ul className="list-disc list-inside grid gap-y-2">
          {[
            '오늘의 할 일 관리: 매일 해야 할 일을 빠르게 추가하고, 완료 여부를 체크하세요.',
            '주간 목표 설정: 한 주 동안의 계획을 미리 설정하고, 일정을 체계적으로 관리하세요.',
            '카테고리별 관리: 업무, 학업, 개인 프로젝트 등으로 할 일을 그룹화하여 관리할 수 있습니다.',
            '심플하고 직관적인 UI: 누구나 쉽게 사용할 수 있는 깔끔한 인터페이스를 제공합니다.',
            '다양한 뷰 모드: 캘린더와 리스트 보기를 지원하여 데이터를 한눈에 파악할 수 있습니다.',
          ].map((item, index) => {
            const [title, description] = item.split(':');
            return (
              <li
                key={index}
                className="grid grid-cols-[max-content_auto] gap-x-2 items-start"
              >
                <strong className="text-strong">{title}:</strong>
                <br className="block md:hidden" aria-hidden="true" />{' '}
                {/* 모바일에서만 표시 */}
                <span>{description}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className="text-center">
        <h3 className="text-title">지금 바로 UZU's Todo를 시작해보세요!</h3>
        <p>간단한 설정으로 더 체계적이고 생산적인 하루를 만들어보세요.</p>
        <div className="flex flex-col items-center space-y-4 mt-12">
          <button
            onClick={() => router.push('/auth/login')}
            className=" bg-light-gray text-white rounded-2xl hover:bg-dark-gray transition lg:text-xl lg:px-10 lg:py-4 md:text-lg px-5 py-3 sm:text-sm font-semibold"
          >
            로그인하고 시작하기
          </button>
          <Link
            href="/today-todo"
            className=" text-light-gray hover:text-dark-gray hover:underline transition"
          >
            비회원으로 시작하기
          </Link>
        </div>
      </footer>
    </main>
  );
}
