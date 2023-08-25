import './Courses.css'
import Course from './Course';

function CoursesData(props){
    return(
        <div className="c-card">
            
            <div className="c-image">
                <img src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <div className="d-flex1">
             <p className="lesson">
             <i class="fa-solid fa-book"></i>
             {props.lesson}
             </p>

             <p className="students">
             <i class="fa-light fa-user"></i>
             {props.student} 
             </p>
         </div>

         <div className="d-flex2">
             <p className="rating">
             <i class="fa-regular fa-star"></i>
             {props.rating}
             </p>

             <p className="enroll">
             <a href={props.url}>Enroll Now</a>
            
             </p>
         </div>

            
        </div>
    );
}

export default CoursesData;


// import "./StudyStyle.css"
// import Course from "./Course"
// import{Container,Row,Col} from 'reactstrap'
// import "./Courses.css"

// function CoursesData(){
//     return(
//         <>
//         <div className="coursecard">
//             <Course
//                     title='Web Design Bootcamp'
//                      lesson="12k"
//                     students="5.9k"
//                     url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
//                     imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
//             />

//            <Course
//             title='Web Design Bootcamp'
//                      lesson="12k"
//                     students="5.9k"
//                     imgUrl="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
//             />

//                 <Course
//                    title='Web Design Bootcamp'
//                      lesson="12k"
//                     students="5.9k"
//                     imgUrl="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
//             />

//         </div>
//         </>
//     )
// };

// export default CoursesData;