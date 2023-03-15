// "id":{
//     "title": "",
//     "description": "",
//     "image": ,
//     "date": "",
//     "content": "",
// 
//     "sections": [
//          {"type":"",
//           "title":"Section Title",         
//           "data":[
//              card,
//              card,
//              ...
//          ]},
//          ...
//     ]
// 
//      if type=="TS" : card = { title , tubtitle }
//      if type=="PTS": card = { picture , title , subtitle }


// export const categories = [ 'events', 'competitions', 'workshops']

import img from './banners/7.png'
import case_samadhan_back from './banners/case_samadhan_back.png'
import case_samadhan_text from './banners/case_samadhan_text.png'
import case_samadhan_full from './banners/case_samadhan_full.png'
import rangreza_back from './banners/rangreza_back.png'
import rangreza_text from './banners/rangreza_text.png'
import rangreza_full from './banners/rangreza_full.png'
import satirical_spardha_back from './banners/satirical_spardha_back.png'
import satirical_spardha_text from './banners/satirical_spardha_text.png'
import satirical_spardha_full from './banners/satirical_spardha_full.png'
import social_sawaal_back from './banners/social_sawaal_back.png'
import social_sawaal_text from './banners/social_sawaal_text.png'
import social_sawaal_full from './banners/social_sawaal_full.png'
import social_tasveer_back from './banners/social_tasveer_back.png'
import social_tasveer_text from './banners/social_tasveer_text.png'
import social_tasveer_full from './banners/social_tasveer_full.png'

export const events = 
{
"aaghaaz":{
    "title": "Aaghaaz-e-kaizen",
    "description": "The opening ceremony of Kaizen",
    "image": img,
    "date": "31st March",
    "time": "6:30pm - 8:30pm",
    "venue": "Seminar Hall",
    "content": "The opening ceremony of Kaizen will be commenced with the traditional inauguration by lighting the lamp, followed by a beautiful song by the students of NAB NGO and a cultural dance performance. The chief guest would deliver a speech, highlighting the importance of social service in our society. The official declaration of the start of the Kaizen will mark the beginning of a series of exciting events and activities planned for the duration of the fest.",
    "rank":"6",
    "category":"event",
    "sections": []
},
"social_sawaal":{
    "title": "THE SOCIAL SAWAAL",
    "description": "A quizzing competition for school students to encourage young minds",
    "image": social_sawaal_back,
    "image_text": social_sawaal_text,
    "image_full": social_sawaal_full,
    "date": "1st April",
    "time": "10:00am - 12:00pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "A quizzing competition for school students, is a flagship event at Kaizen '23, where we encourage young minds to become aware of the social aspects of humanity and compete against the brightest minds in the NCR region",
    "rank":"1",
    "category":"competition",
    "sections": []
},     
"social_convention":{
    "title": "SOCIAL CONVENTION",
    "description": "SevaSummit: The Social Symposium",
    "image": img,
    "date": "1st April",
    "time": "10:30am - 1:30pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "SevaSummit: The Social Symposium",
    "rank":"61",
    "category":"event",
    "sections": []
},
"ingenious_geeks":{
    "title": "INGENIOUS GEEKS 2.0",
    "description": "A science exhibition competition for school students to showcase their creative innovative mind",
    "image": img,
    "date": "1st April",
    "time": "12:00pm - 2:00pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "A science exhibition competition for school students to showcase their creative innovative mind",
    "rank":"9",
    "category":"competition",
    'rulebook':'https://drive.google.com/file/d/12d7VWu8OWXT8DI-Z5DiQjP1bNRd5zmoQ/view?usp=share_link',
    "sections": []
},
"soch":{
    "title": "SOCH",
    "description": " A workshop on Gender Sensitization",
    "image": img,
    "date": "1st April",
    "time": "2:00pm - 3:00pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "This workshop will be based on Gender Sensitization, where we’ll discuss about all about different types of Gender, Myths & Facts about LGBTQ+ Community and intreact with speakers from the community.",
    "rank":"7",
    "category":"workshop", 
    "sections": []
},
"sakshi":{
    "title": "SAKSHI",
    "description": "A workshop on Stop Child Sexual Abuse",
    "image": img,
    "date": "1st April",
    "time": "3:00pm - 4:00pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "Sakshi NGO is a non-profit organization based in India that focuses on providing education, healthcare, and empowerment programs for underprivileged children and women in rural areas. Their aim is to create sustainable development and improve the quality of life for marginalized communities.Sakshi will be conducting a workshop.Topic - Stop Child Sexual Abuse POCSO Act 2012",
    "rank":"10",
    "category":"workshop",
    "sections": []
},
"yuva_chetna":{
    "title": "YUVA CHETNA",
    "description": "Panel discussion on Youth Engagement in Social Work",
    "image": img,
    "date": "1st April",
    "time": "5:00pm - 6:30pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "The event Yuva Chetna is a panel discussion featuring IAS and IPS officers, aiming to encourage youth to become active agents of change and participate in addressing critical issues in society. The discussion will inspire young people to use their skills and knowledge to make a difference in their communities. ",
    "rank":"612",
    "category":"event",
    "sections": []
},
"rangreza":{
    "title": "RANGREZA",
    "description": "Fashion Show",
    "image": rangreza_back,
    "image_text": rangreza_text,
    "image_full": rangreza_full,
    "date": "2nd April",
    "time": "7:00 pm - 10:00 pm",
    "venue": null,
    "content": "Fashion Show",
    "rank":"5",
    "category":"competition",
    "rulebook": "https://www.canva.com/design/DAFbfwBMwX0/j0J_fWp93dn1yGr62G2DHw/edit?utm_content=DAFbfwBMwX0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    "sections": []
},
"case_samadhan":{
    "title": "CASE SAMADHAN",
    "description": "A social case study competition to address real-world problems through critical thinking and innovation",
    "image": case_samadhan_back,
    "image_text": case_samadhan_text,
    "image_full": case_samadhan_full,
    "date": "2nd April",
    "time": "10:00 am - 12:00 noon",
    "venue": null,
    "content": "A social case study competition to address real-world problems through critical thinking and innovation",
    "rank":"2",
    "category":"competition",
    "rulebook": "https://www.canva.com/design/DAFbfwBMwX0/j0J_fWp93dn1yGr62G2DHw/edit?utm_content=DAFbfwBMwX0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    "sections": []
},
"goonj":{
    "title": "GOONJ",
    "description": "A workshop on Menstrual Health & Hygiene",
    "image": img,
    "date": "2nd April",
    "time": "1:00pm - 2:00pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "Goonj is a social organization based in India that aims to address the basic needs of underprivileged communities, such as clothing, sanitary pads, and school supplies, through a unique model of resource mobilization and distribution. They also provide disaster relief and rehabilitation programs during emergencies. Goonj will be conducting a workshop. Topic - Menstrual Health & Hygiene",
    "rank":"12",
    "category":"workshop",
    "sections": []
}, 
"shiksha_talk":{
    "title": "SHIKSHA TALK",
    "description": " Empowering Rural India Through Education",
    "image": img,
    "date": "2nd April",
    "time": "11:00am - 12:00pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "The event will host a panel discussion with renowned and respected educators who have experience working with rural communities. They will discuss the challenges faced by rural areas in accessing education and share innovative approaches to improving education outcomes.        ",
    "rank":"631",
    "category":"event",
    "sections": []
},
"sociopreneur_samvad":{
    "title": "SOCIOPRENEUR SAMVAD",
    "description": "Pioneering change through Innovation",
    "image": img,
    "date": "2nd April",
    "time": "2:00pm - 3:30pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "The Sociopreneur Samvad is an exciting event for those passionate about social entrepreneurship and making a positive impact on the society. The distinguished guests will provide their valuable personal experiences about the subject, the obstacles they faced and the solutions they utilized to overcome them. Join for an enlightening event!!",
    "rank":"601",
    "category":"event",
    "sections": []
},
"style_green":{
    "title": "STYLE GREEN",
    "description": "A stage to exhibit recyclable and sustainable fashion",
    "image": img,
    "date": "1st April",
    "time": "7:00pm - 9:30pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "A stage to exhibit recyclable and sustainable fashion.",
    "rank":"11",
    "category":"competition",
    "rulebook":'',

    "sections": []
},
"satirical_spardha_text":{
    "title": "SATIRICAL SPARDHA",
    "description": "A parody making competition to bring attention to social issues and inspire positive change in our society",
    "image": satirical_spardha_back,
    "image_text": satirical_spardha_text,
    "image_full": satirical_spardha_full,
    "date": "2nd April",
    "time": "3:30pm - 5:30pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "A parody is a creative work that imitates or mocks a well-known piece of art, literature, or music in a humorous way. Therefore, we are using the power of parody to bring attention to social issues and inspire positive change in our society            ",
    "rank":"3",
    "category":"competition",
    "sections": []
},
"social_tasveer":{
    "title": "SOCIAL TASVEER",
    "description": "A photo story competition on social issues to picture the change you want to see in the world",
    "image": social_tasveer_back,
    "image_text": social_tasveer_text,
    "image_full": social_tasveer_full,
    "date": "22th March",
    "time": "6:45pm - 8:45pm",
    "venue": "Online",
    "content": "A photostory competition on social issues to picture the change you want to see in the world",
    "rank":"4",
    "category":"competition",    
    "sections": []
},       
"closing_ceremony":{
    "title": "CLOSING CEREMONY",
    "description": "SevaSummit: The Social Symposium",
    "image": img,
    "date": "2nd April",
    "time": "6:00pm - 8:30pm",
    "venue": "Seminar Hall, and Live Streaming on Zoom",
    "content": "The closing ceremony of the social festival Kaizen will be an amazing event, featuring a live painting by FACC, followed by a mesmerising music performance by Music club IITD, and a captivating guest performance.Also, the prize distribution ceremony, to recognize the participation of students. The chief guest will be Mr Shyam Sunder Paliwal, and the guest speakers will be Kirti Bharti and Aneesh Karma. The chief guest speech will culminate in a successful conclusion to the festival. The event will leave everyone motivated to continue their pursuit of growth and improvement.",
    "rank":"61",
    "category":"event",
    "sections": []
},      

}
