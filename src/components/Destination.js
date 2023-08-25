import DestinationData from "./DestinationData";
import "./DestinationStyle.css"

const Destination = () =>{
  return (
   <div className="Destination">
    <h1>Popular Courses</h1>
    <p>“One day, all your hard work will pay off.”</p>
   
   
   <DestinationData 
   className="first-des"
   heading="1. Full Stack web development course"
   text="It mainly refers to the coding and programming of websites. Students can learn about common programming languages, software. Billions of people rely on web development as now it is becoming indispensable. Students get to explore the various frontiers, aspects of web development. It provides an exciting piece of knowledge and can be thrilling as well.                      
   They can learn the course through online lessons, practice, and graded quizzes. Most students are motivated to gain essential web development skills, and they can try different courses. Students can opt for this course at Code Academy, which gives students complete exposure to the subject in a detailed manner. "
   img1={"https://chennai.vit.ac.in/wp-content/uploads/2021/06/Full-Stack-web-development-course-Computer-Science-Certification-Courses.jpg"}
   img2={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png"}
   />


<DestinationData 
className="first-des-reverse"
heading="2. Artificial Intelligence course"
   text="Students with strong technical backgrounds and skills who wish to learn the art of AI techniques can opt for advanced AI: deep reinforcement learning in Python. 

   Students aspiring for this course must possess knowledge of basic computer technology. 
   It has a tremendous career with high qualified jobs and an opportunity to work with life-changing technology daily. 
   Students can develop primary core interests in this field as it has intriguing subfields and is a primary driver of emerging technologies like robotics, big data, etc. 
   As per sources, AI and machine learning jobs are on-demand and have seen an enormous growth of 75% over the past four years. 
   One of the best computer-certified courses for computer science students would help students gain more experience and a great foundation of advanced learning. "
   img1={"https://chennai.vit.ac.in/wp-content/uploads/2021/06/Artificial-Intelligence-Course-Computer-Science-Certification-Courses.jpg"}
   img2={"https://easycourses.in/filescab/courses/crs_55.jpg"}
   />

   
   </div>
  );
};
export default Destination;