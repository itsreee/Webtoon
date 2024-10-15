import React from 'react'
import Cards from './Cards';
const Trending = () => {
  return (
   <>
   <h1 className='text-white m-2 border-start border-5'>Trending Now</h1>
   <h6 className='text-white ps-4'>Explore the world of webtoon</h6>
  <div className='d-flex gap-2 justify-content-center' id="card">
  <Cards img="https://th.bing.com/th/id/OIP.KGHTQoN5auQPX9TraI5ctAAAAA?rs=1&pid=ImgDetMain" title="Dark Moon-Blood Altar"/>
  <Cards img="https://th.bing.com/th/id/OIP.EntzMhHSPkOK0yUAi7OJRAAAAA?rs=1&pid=ImgDetMain" title="Operation True Love"/>
  <Cards img="https://th.bing.com/th/id/OIP.MocEDuOWN8k0SQQz7SNR6QAAAA?rs=1&pid=ImgDetMain" title="Omniscent Reader"/>
  <Cards img="https://www.online-station.net/wp-content/uploads/2023/02/Solo-Leveling-01.jpg" title="Solo Levling"/>
  <Cards img="https://th.bing.com/th/id/OIP.4jNB8Q-8khfCSVWhxMKIsAHaL1?pid=ImgDet&w=178&h=284&c=7&dpr=1.3" title="Haikyu"/>
  <Cards img="https://th.bing.com/th/id/OIP.3ZPjJSCFzM6gfG0YKczS2wHaJn?rs=1&pid=ImgDetMain" title="Pyramid Game"/>
  </div>
  <h1 className='text-white m-2 border-start border-5'>Recently Updated</h1>
   <h6 className='text-white ps-4'>Explore the world of webtoon</h6>
  <div className='d-flex gap-2 justify-content-center' id='card'>
  <Cards img="https://image.kpopmap.com/2023/11/true-beauty-anime-poster.jpg" title="True Beauty"/>
  <Cards img="https://th.bing.com/th/id/OIP.z-J1g9zxkiVSoGTD2gYYaAHaKi?rs=1&pid=ImgDetMain" title="Good Day To Be A Dog"/>
  <Cards img="https://th.bing.com/th/id/OIP.6tPqC63oMOJKd0ZwQupt7wHaKn?rs=1&pid=ImgDetMain" title="Please Make Me A Demon"/>
  <Cards img="https://th.bing.com/th/id/OIP.oM8kxSv3RAJ22bNuONviQwAAAA?rs=1&pid=ImgDetMain" title="Sweet Home"/>
  <Cards img="https://ih1.redbubble.net/image.2093318017.3680/raf,750x1000,075,t,101010:01c5ca27c6.jpg" title="Parasite"/>
  <Cards img="https://i.pinimg.com/736x/80/42/1c/80421cb3e57dcae63b94bb1d4b14fb48.jpg" title="Cloud Walker"/>
  </div>
   </> 
)
}

export default Trending