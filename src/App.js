import React from 'react';
import './style/__common.scss';

function App() {
  return (
    <div className="App">
      <header>
        <h1>payco 식권 지도</h1>
        <mark>수내(본사)</mark>
        <p>총 35 개의 사용처</p>
      </header>

      <main>
        <section>
          <h3>뭘 먹을까?</h3>
          <ul>
            <li>한식(밥)</li>
            <li>한식(면)</li>
            <li>중식</li>
            <li>일식(초밥, 회)</li>
            <li>일식(덮밥, 라멘)</li>
            <li>양식</li>
            <li>분식</li>
          </ul>
          <h4>어디서 먹을까?</h4>
          <ul>
            <li>category에 맞는 식당리스트가 나옴</li>
          </ul>
        </section>

      </main>

      <footer>
        <p>Creator</p>
        <dl>
          <dt>작성자</dt>
          <dd>정수진</dd>

          <dt>부서</dt>
          <dd>티맥스오에스/PM본부/UX팀/UX연구원</dd>
        </dl>

        <address>
          <a href={'sinri0809.github.io'}>github</a>
        </address>
      </footer>
    </div>
  );
}

export default App;
