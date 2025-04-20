import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  roles: {
    title: string;
    date: string;
    description: string;
  }[];
  logo: string;
}[] = [
  {
    company: 'CBRE Group, Inc',
    logo: '/CBRE_logo.png',
    roles: [
      {
        title: 'Software Engineer II',
        date: 'March 2025 → Present',
        description:
          'Leading backend initiatives for the CBRE Tech App, supporting 3M+ daily work orders and 50K+ users. Designed high-throughput systems and caching layers that significantly reduced latency and improved cross-service performance.'
      },
      {
        title: 'Software Engineer I',
        date: 'June 2024 → March 2025',
        description:
          'Scaled backend services to 2M+ daily requests by building a BFF architecture and optimizing APIs. Reduced response times by 65% and earned CBRE’s Excellence Award for platform improvements.'
      },
      {
        title: 'Software Engineer Intern',
        date: 'June 2023 → June 2024',
        description:
          'Built internal tools supporting 2M+ daily requests, including a report scheduler and a request flagging system. Developed an analytics dashboard used by business leaders for real-time data exploration.'
      }
    ]
  },
  
  
    {
      company: 'FPT Software',
      logo: '/FPT_Software_Logo.png',
      roles: [
        {
          title: 'Software Engineer Intern',
          date: 'April 2022 → July 2022',
          description: 'At FPT Software, I contributed to the development of internal tools for streamlining operations and worked with cross-functional teams to design and implement scalable solutions.'
        }
      ]
    },
    {
      company: 'MISA Software',
      logo: '/MISA_JSC.png',
      roles: [
        {
          title: 'Software Engineer Intern',
          date: 'April 2021 → July 2021',
          description: 'As an intern at MISA JSC, I assisted in developing and maintaining financial software, focusing on improving system reliability and performance optimization.'
        }
      ]
    }
  ];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg">
        <p>
          Hi there, I&apos;m Ngoc Hiep Nguyen, a passionate Full-Stack Software Engineer with experience building
          high-impact applications. Currently, I work at CBRE, where I have contributed to the success of mission-critical
          platforms, including the CBRE Tech App, a global mobile solution handling millions of daily work orders.
        </p>

        <p>
          My expertise spans across backend and frontend development, cloud infrastructure, and microservices architecture.
          I take pride in building systems that scale and serve millions of users. I’ve had the opportunity to work on complex,
          high-performance applications, focusing on optimizations such as reducing API response times, streamlining push
          notification services, and enhancing cross-service data caching.
        </p>

        <p>
          Outside of my technical work, I’m passionate about using AI to enhance the user experience and improve the way
          businesses operate. Whether it's improving system resilience or driving business logic discussions, I thrive in
          making meaningful impacts across teams and applications.
        </p>

        <p>
          If you’re interested in working together, feel free to reach out to me here: <Link href="mailto:hiepnguyentcu@gmail.com">hiepnguyentcu@gmail.com</Link>.
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => (
            <div key={exp.company} className="py-6">
              <div className="flex gap-4">
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  {exp.roles.map((role) => (
                    <div key={role.date} className="mt-4">
                      <div className="flex justify-between items-center text-slate-700 text-lg font-semibold">
                        <span>{role.title}</span>
                        <span className="text-slate-500 text-sm">{role.date}</span>
                      </div>
                      <p className="mt-2 text-slate-500 text-sm">{role.description}</p>
                    </div>
                  ))}

                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/HenryNguyen_Resume_2025.pdf"
          target="_blank"
          className="block my-8 text-slate-500 text-sm font-medium"
        >
          Download resume →
        </Link>
      </section>
    </main>
  );
}
