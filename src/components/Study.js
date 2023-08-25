import "./StudyStyle.css"
import StudyData from "./StudyData";
import{Container,Row,Col} from 'reactstrap'

function study(){
    return(
        <div className="study">
            {/* <Container>
                <Row>
                    <Col lg='4'>
                        <div className="first_course_item">
                            <div className="course_img">
                                <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png" alt="image"/>
                            </div>
                            <div className="course_details">
                                <h5 className="course_title">
                                    web design BootCamp
                                </h5>

                                <div className="d-flex">
                                    <p className="lesson">
                                    <i class="fa-solid fa-book"></i>
                                    12 lessons
                                    </p>

                                    <p className="students d-flex ">
                                    <i class="fa-light fa-user"></i>
                                    12.5k
                                    </p>
                                </div>

                                <div className="d-flex">
                                    <p className="rating">
                                    <i class="fa-regular fa-star"></i>
                                    12K
                                    </p>

                                    <p className="enroll">
                                    <a href="##">Enroll Now</a>
                                    
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> */}
            <h1>Study plan</h1>
            <p>you can discover unique</p>
<div className="StudyCard">
   
<StudyData 
    image="https://www.pixelcrayons.com/blog/wp-content/uploads/2018/04/java-logo.jpg"
    heading="Java"
    text="Java programs are easy to understand, structured and less prone to errors. Also, they are platform independent and portable which makes it a good choice for mobile, web and desktop applications. So, if you are looking for a career in software development then it is good to start with the Java language"
    />
    
    <StudyData 
    image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
    heading="C++"
    text="C++ programs are directly compiled into machine-executable codes which consumes less time to execute the code. Hence, it is widely used in competitive programming where you are expected to optimise time and memory. So, if you are interested to explore competitive programming then it is good to start with C++ language"
    />
    
    <StudyData 
    image="https://www.ntuclearninghub.com/documents/39367/4216797/Python-Symbol.png/369e410e-a90f-f887-c2dc-61f7ef761476/"
    heading="Python"
    text="Python programs are simple in syntax with extensive library support which helps the programmers to come up with required logic with few lines of code. It is popular and widely used in the data domains like data science, Machine learning, deep learning etc.., So, if you are looking for a career in the field of Artificial Intelligence then it is good to start with the Python language
    "
    />
</div>
        </div>
    );
}

export default study;