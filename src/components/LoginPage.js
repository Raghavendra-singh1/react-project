import './LoginPage.css'
const LoginPage=()=>{
    return(
        <>
        <div className="div1">
            <div className="div2">
              <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" className="w-full h-full"/>
               <div className='div3'>
                <h1>Turn Your Dream into Reality</h1>
               </div>
            </div>
            <div className='div4'>
              <div className='sub-main'>
                <div className='img'>
                    <div className='container'>
                          <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt='image' className='profile'/>
                    </div>


                    <div>
                        <div className='div5'>
                            <h1>login page</h1>
                            <div>
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" placeholder='Email' className='email'/>
                            </div>
                            <div >
                            <i class="fa-regular fa-key"></i>
                            <input type="password" placeholder='password' className='password'/>
                            </div>

                            <div className='button'>
                            <button >Login</button>
                            </div>

                            <div className='signup'>
                                <p className='sup'>dont have any account?<a href="/signup"> <span className='sign'>signup </span></a>  for free</p>
                            </div>

                            
                        </div>
                    </div>
                </div>
              </div>

            </div>
        </div>
        </>
    )
}

export default LoginPage;