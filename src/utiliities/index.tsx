import { StaticImageData } from "next/image";
import { Calender, Global, Key, Knc, Security, Service1, Service2, Service3, Service4, UserTick } from "../../public/image";

export interface ICard {
  img: any;
  title: string;
  text: string;
}

export const offer: ICard[] = [
  {
    img: Knc,
    title: 'Managed Security Service',
    text: 'We offer end-to-end security solutions, including threat monitoring, incident response, and risk assessments.',
  },
  {
    img: Security,
    title: 'Penetration Testing',
    text: 'We help organizations identify vulnerabilities in their systems before they can be exploited by attackers.',
  },
  {
    img: UserTick,
    title: 'Cybersecurity Consulting',
    text: 'Rhivet also provides businesses with expert guidance on improving their security posture.',
  },
  {
    img: Global,
    title: 'Identity and Access Management',
    text: 'Our IAM solutions provide centralized control and privileged access management, enhancing overall security.',
  },
  {
    img: Key,
    title: 'Cloud Security ',
    text: 'We help organizations implement robust security configurations and  monitor cloud environments for threats',
  },
  {
    img: Calender,
    title: 'Cybersecurity Training & Awareness',
    text: 'We offer comprehensive training and awareness programs designed to educate and empower your employees.',
  },

]

export interface ISCard {
  img?: any;
  title: string;
  text: string;
  img2: any
  color?: string;
  bg?: string;
}

export const services: ISCard[] = [
  {
    // img: Knc,
    title: 'Managed Security Service',
    text: "We offer end-to-end security solutions, including threat monitoring, incident response, and risk assessments. Our team of experts actively monitors networks, systems, and data, detecting and responding to threats in real time. Rhivet gives you access to industry-leading security technologies ensuring the continued protection of your organization's assets.",
    img2: Service1,
    color: '#fff',
    bg: '#000'
  },
  
  {
    img: UserTick,
    title: 'Penetration testing',
    img2: Service3,
    text: 'We help organizations identify vulnerabilities in their systems before they can be exploited by attackers. Our certified ethical hackers simulate real-world attack scenarios to assess the security of your infrastructure, applications, and networks. By conducting thorough penetration tests, we provide actionable insights and recommendations to fortify your defenses.',
  },
  {
    img: Key,
    img2: Service4,
    title: 'Cybersecurity Consulting',
    text: "Rhivet also provides businesses with expert guidance on improving their security posture and complying with relevant regulations. We assess your existing security practices, identify gaps, and develop comprehensive strategies tailored to unique requirements, empowering organizations to implement effective security measures.    "
  },
  {
    // img: Security,
    title: 'Identity and Access Management',
    img2:  Service2,
    text: "Rhivet develops and sells state-of-the-art Identity and Access Management (IAM) solutions that enable organizations to manage and secure user identities and access critical systems and data. Our IAM solutions provide centralized control, strong authentication mechanisms, access governance, and privileged access management, enhancing overall security.",
  },
  {
    img: Global,
    img2:  Service2,
    title: 'Cloud Security',
    text: "With the increasing adoption of cloud computing, organizations face unique security challenges. We specialize in protecting businesses using cloud platforms and services. We help organizations implement robust security configurations, monitor cloud environments for threats, encrypt sensitive data, and establish secure data backups and recovery mechanisms.     ",
  },
  
  {
    img: Calender,
    img2:  Service2,
    title: 'Cybersecurity Training & Awareness',
    text: "We offer comprehensive training and awareness programs designed to educate and empower your employees to become the first line of defense against cyber threats. Our training sessions cover topics such as phishing awareness, password hygiene, social engineering, and safe online practices. By doing this, we reduce the risk of human error.",
  },

]
