import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Link from 'next/link';

const contact: {
  method: string;
  link: string;
  label: string;
}[] = [
  {
    method: 'Email',
    link: 'mailto:hiepnguyentcu@gmail.com',
    label: 'hiepnguyentcu@gmail.com',
  },
  {
    method: 'GitHub',
    link: 'https://github.com/hiepnnguyentcu',
    label: 'git/hiepnnguyentcu',
  },
  {
    method: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hiepnnguyentcu/',
    label: 'in/hiepnnguyentcu',
  },
];
export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Contact" />
      <section className="pb-8">
      <p className="text-lg mb-4">
        I’d love to connect! Whether you have a question, a collaboration idea, or just 
        want to say hi — feel free to reach out through the channels below.
      </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contact.map((contactMethod) => {
            return (
              <div className="flex flex-col" key={contactMethod.method}>
                <Title as="h2" variant="tertiary">
                  {contactMethod.method}
                </Title>
                <Link href={contactMethod.link} className="text-slate-700">
                  {contactMethod.label}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
