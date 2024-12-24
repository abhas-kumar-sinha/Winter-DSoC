import LoginForm from './LoginForm';
import Slider from './Slider';
import './Login.css'

const Auth = () => {
    const loginSwiper = ["home", "about-us", "blog", "pricing"];
    return (
        <div id='main'>
        <LoginForm />
        <Slider swiperList = {loginSwiper}/>
        </ div>
    )
}

export default Auth;