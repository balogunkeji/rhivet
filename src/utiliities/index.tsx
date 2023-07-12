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
    title: 'MANAGED SECURITY SERVICE',
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
    text: 'Lorem ipsum dolor sit amet consectetur. Et ornare posuere quisque morbi egestas convallis.',
  },
  {
    img: Key,
    title: 'Cloud Security ',
    text: 'We specialize in protecting businesses using cloud platforms and services.',
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
    title: 'Network monitoring',
    text: 'Network monitoring is a critical component of robust cybersecurity. At Rhivet Networks, we offer comprehensive network monitoring solutions to proactively safeguard your digital infrastructure. Our advanced monitoring tools continuously monitor network traffic, detecting and alerting you to potential security threats in real-time. With our expertise, we help you identify and respond to suspicious activities, unauthorized access attempts, and other network anomalies promptly. ',
    img2: Service1,
    color: '#fff',
    bg: '#000'
  },
  
  {
    img: UserTick,
    title: 'Penetration testing',
    img2: Service3,
    text: 'Network monitoring is a critical component of robust cybersecurity. At Rhivet Networks, we offer comprehensive network monitoring solutions to proactively safeguard your digital infrastructure. Our advanced monitoring tools continuously monitor network traffic, detecting and alerting you to potential security threats in real-time. With our expertise, we help you identify and respond to suspicious activities, unauthorized access attempts, and other network anomalies promptly. ',
  },
  {
    img: Key,
    img2: Service4,
    title: 'Incident Responder',
    text: 'Network monitoring is a critical component of robust cybersecurity. At Rhivet Networks, we offer comprehensive network monitoring solutions to proactively safeguard your digital infrastructure. Our advanced monitoring tools continuously monitor network traffic, detecting and alerting you to potential security threats in real-time. With our expertise, we help you identify and respond to suspicious activities, unauthorized access attempts, and other network anomalies promptly. ',
  },
  {
    // img: Security,
    title: 'Security consulting',
    img2:  Service2,
    text: 'Network monitoring is a critical component of robust cybersecurity. At Rhivet Networks, we offer comprehensive network monitoring solutions to proactively safeguard your digital infrastructure. Our advanced monitoring tools continuously monitor network traffic, detecting and alerting you to potential security threats in real-time. With our expertise, we help you identify and respond to suspicious activities, unauthorized access attempts, and other network anomalies promptly. ',
  },
  {
    img: Global,
    img2:  Service2,
    title: 'Virtual CISO',
    text: 'Network monitoring is a critical component of robust cybersecurity. At Rhivet Networks, we offer comprehensive network monitoring solutions to proactively safeguard your digital infrastructure. Our advanced monitoring tools continuously monitor network traffic, detecting and alerting you to potential security threats in real-time. With our expertise, we help you identify and respond to suspicious activities, unauthorized access attempts, and other network anomalies promptly. ',
  },
  
  {
    img: Calender,
    img2:  Service2,
    title: 'Weekly Report',
    text: 'Network monitoring is a critical component of robust cybersecurity. At Rhivet Networks, we offer comprehensive network monitoring solutions to proactively safeguard your digital infrastructure. Our advanced monitoring tools continuously monitor network traffic, detecting and alerting you to potential security threats in real-time. With our expertise, we help you identify and respond to suspicious activities, unauthorized access attempts, and other network anomalies promptly. ',
  },

]
