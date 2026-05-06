import React from 'react';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <main style={{padding: '48px 24px', maxWidth: 960, margin: '0 auto'}}>
      <h1>Smart Study Planner</h1>
      <p>Техническая документация проекта: требования, архитектура, API, диаграммы, модель данных и подход Docs as Code.</p>
      <p><Link className="button button--primary" to="/docs/intro">Открыть документацию</Link></p>
    </main>
  );
}
