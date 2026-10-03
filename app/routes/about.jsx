export const meta = () => [{ title: "About | Fieldnote" }];

export default function About() {
  return (
    <>
      <h1>About us</h1>
      <div dangerouslySetInnerHTML={{ __html: "<p>Fieldnote is made by two designers who were tired of spreadsheets and missed billable hours.</p><p>It costs $8 a month after a 14-day free trial, with no limit on clients or projects.</p>" }} />
    </>
  );
}
