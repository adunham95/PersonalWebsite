import { Injectable } from '@angular/core';

@Injectable()
export class ResumeService {

  resume;
  isProd: boolean;
  constructor() {
    this.isProd = false
  }

  getEndpoint(ep){
    if(this.isProd){
      return ep
    }
    else {
      return 'http://localhost:8080/'+ep
    }
  };

  getResume(){
    this.resume = {
      "about": {
        "name": "Adrian Dunham",
        "email": "adunham95@gmail.com",
        "phone": "828-398-9038",
        "website": "adriandunham.com",
        "aboutMe": "I am a recent graduate of WCU looking for a job as a front end developer. After writing my first line of HTML and getting 'HELLO WORLD' on the screen I was hooked. I continued to learn HTML, CSS, JavaScript writing basic websites to more advanced single pages app. I still have that passion for turning words on the screen on masterpieces on the screen. After building a basic personal website. I have rewritten it multiple times, making it more modern and adding more technology. My most recent project was taking static designs from a designer and converting it to a WordPress template using VueJS and the WordPress API. I am currently looking for a job as front-end web developer interested in challenges. If you have a challenge for me to tackle contact me at adunham95@gmail.com",
        "tagLine": "Im Adrian and I am a front end devloper",
        "accomplishments": [
          {
            "date": "May 2017",
            "title": "Graduated College"
          },
          {
            "date": "October 2016",
            "title": "Released First Hybrid App on the Google Play store"
          },
          {
            "date": "August 2015",
            "title": "Published my first website"
          }
        ]

      },
      "education": [
        {
          "school": "Western Carolina University",
          "schoolLocation": "Cullowhee,NC",
          "degree": "BS in Business Administration",
          "major": "Computer Information Systems",
          "graduation": "May 2017"
        }
      ],
      "experience": [
        {
          "companyName": "DamGap Studios",
          "location": "Freelance",
          "positions": [
            {
              "roleName": "Freelance Web Developer",
              "time": "May 2017-Current",
              "duties": ['null']
            }
          ]
        },
        {
          "companyName": "Western Carolina University",
          "location": "Cullowhee, NC",
          "positions": [
            {
              "roleName": "Desktop Service Technician",
              "time": "May 2015-May 2017",
              "duties": [
                "Hardware Repairs and Dell laptops and desktops, Assist students and staff in basic and advanced computer troubleshooting, virus removal, performance issues, and hardware issues",
                "Performing system re-imaging using SCCM",
                "Experience with the the Cherwell Customer Service Management"
              ]
            },
            {
              "roleName": "Student Help Desk Assistant",
              "time": "January 2014-April 2015",
              "duties": [
                "Assisting students in basic computer troubleshooting including virus removal, wireless issues, performance issues",
                "Software support with Windows 7, 8, 8.1, 10 and Mac OS X",
                "Experience with the the Cherwell Customer Service Management"
              ]
            }
          ]
        },
        {
          "companyName": "Asheville City Schools",
          "location": "Asheville, NC",
          "positions": [
            {
              "roleName": "Helpdesk IT Support Technician",
              "time": " June–August 2012, June-August 2013",
              "duties": [
                "Provided hardware and software support for approx.700 students and faculty using MS Windows XP,7, MS Office 2007, and various software products",
                "Resolved all common and uncommon computer problems including viruses, slow performance, errors, software installation and configuration, wireless networks, and peripheral problems",
                "Provided a timely resolution for all technical support and technology issues",
                "Resourceful in handling competing priorities in a fast-paced environment."
              ]
            },
            {
              "roleName": "IT Intern",
              "time": "January 2013- June 2013",
              "duties": [
                "Provided technical support for MS Windows 7, MS Office 2007, 2010",
                "Hands on support and repair of Dell and Lenovo desktops",
                "Deployed and creating images using Dell Kace Box",
                "Assisting in providing technical support for a Windows Enterprise environment"

              ]
            }
          ]
        }
      ],
      "projects": [
        {
          "name": "Ashely T Lee",
          "role": "Co-Developer",
          "dateComplete": "July 2017",
          "descriptionShort": "A Wordpress theme using VueJS",
          "githubURL": "https://github.com/DamGapStudios/AshleyTLee.com",
          "website": "http://www.ashleytlee.com/",
          "imageURL": "../../assets/mockup/AshleyTLee_dell-xps15-front.png",
          "technology": [
            "VueJS", "HTML", "Wordpress"
          ]
        },
        {
          "name": "Travel Julia's Way",
          "role": "Co-Developer",
          "dateComplete": "April 2017",
          "descriptionShort": "A Wordpress site built using the Twig Templateing Language",
          "githubURL": "https://github.com/AmGarera/Traveljuliasway.com",
          "website": "http://www.traveljuliasway.com",
          "imageURL": "../../assets/mockup/TravelJuliasWay_dell-xps15-front.png",
          "technology": [
            "HTML", "Wordpress", "Twig", "HTML5"
          ]
        },
        {
          "name": "TreeApp Beta",
          "role": "Lead Developer",
          "dateComplete": "ay 2017",
          "descriptionShort": "Capstone Project to build an app to display trees around Western Carolina University’s campus using the user's geolocation",
          "githubURL": "https://github.com/adunham95/TreeApp-Capstone",
          "website": "https://play.google.com/store/apps/details?id=com.damgap.treeapp",
          "technology": [
            "Ionic", "AngularJS 2", "CordovaPhoneGap"
          ]
        },
        {
          "name": "AtomBrew",
          "role": "Co-Developer",
          "dateComplete": "October 2017",
          "descriptionShort": "A brewery Android app based on the BreweryDB. A hybrid Mobile App using AngularJS & Ionic Framework",
          "githubURL": "https://github.com/AmGarera/IonBrew",
          "website": "https://play.google.com/store/apps/details?id=com.DamGap.atombrew433336",
          "technology": [
            "Ionic", "AngularJS 1", "CordovaPhoneGap"
          ]
        },
        {
          "name": "Reems Creek Community Website",
          "role": "Lead Developer",
          "dateComplete": "April 2015",
          "descriptionShort": "A community website for the members of Reems Creek Community",
          "githubURL": "",
          "website": "http://www.reemscreekcommunity.org/",
          "technology": [
            "Wordpress"
          ]
        }
      ],
      "knowledge": {
        "webDevelopment": ["HTML", "CSS", "JavaScript", "Angular JS", "VueJS", "Wordpress"],
        "os": ["Windows 7", "Windows 8", "Windows 8.1", "Windows 10", "Mac OS X", "Android"],
        "imaging": ["Dell’s Kace Box", "SCCM", "Casper Imaging"],
        "programs": ["Cherwell Service Management", "Visual Studio 2015", "WebStorm", "PHPStorm", "IntelliJ IDEA"]
      },
      "skills": [
        "System deployment using Scripted Installation",
        "Proficient in computer repair and administrative organizing",
        "Problem solving skills",
        "Effective interpersonal communication skills",
        "Ingenuity and innovation in all aspects of the job"
      ],
      "contact": [
        {
          "source": "Github",
          "url": "github.com/adunham95"
        },
        {
          "source": "Linkedin",
          "url": "https://www.linkedin.com/in/adrian-dunham-2521488a"
        }
      ],
    };
    return this.resume;
  }

  saveProject(project){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let endPoint = this.getEndpoint('projects/saveproject');
  }

}
