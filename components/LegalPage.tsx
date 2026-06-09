type LegalSection = {
  title: string;
  body?: string;
  items?: string[];
};

type LegalPageProps = {
  title: string;
  updatedAt: string;
  intro: string;
  sections: LegalSection[];
  children?: React.ReactNode;
};

export function LegalPage({ title, updatedAt, intro, sections, children }: LegalPageProps) {
  return (
    <main className="legal-page">
      <section className="legal-card">
        <h1>{title}</h1>
        <p className="legal-meta">Last updated: {updatedAt}</p>
        <p>{intro}</p>
        {children}
        {sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body ? <p>{section.body}</p> : null}
            {section.items ? (
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : null}
          </section>
        ))}
        <footer className="legal-footer">
          <p>© 2026 TeamShastra · <a href="https://teamshastra.com">teamshastra.com</a></p>
        </footer>
      </section>
    </main>
  );
}