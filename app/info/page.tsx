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
          Hi there, I&apos;m Ngoc Hiep Nguyen, a Full-Stack Software Engineer passionate about building high-impact applications. At CBRE, I contribute to mission-critical platforms like the CBRE Tech App—a global mobile solution managing millions of daily work orders.
        </p>

        <p>
          My expertise spans backend and frontend development, cloud infrastructure, and microservices architecture. I take pride in engineering scalable systems that serve millions of users efficiently. My work has focused on reducing API response times, scaling push notification services, and optimizing cross-service data caching for better performance.
        </p>

        <p>
          Beyond code, I’m deeply interested in applying AI to elevate user experience and streamline business operations. I enjoy solving complex problems, participating in architectural discussions, and making an impact across engineering and product teams.
        </p>

        <p>
          Feel free to reach out if you’d like to connect: <Link href="mailto:hiepnguyentcu@gmail.com">hiepnguyentcu@gmail.com</Link>.
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
