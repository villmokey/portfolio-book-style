import React from 'react';
import HTMLFlipBook from 'react-pageflip'
import { ReadButton } from './components/Icons';
import Php from './assets/images/php.png';
import Laravel from './assets/images/laravel.png';
import Mysql from './assets/images/mysql.png';


const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="bg-[url('assets/images/space.png')] border border-white bg-center p-7" ref={ref} data-density="hard">
      <div className="flex text-white text-[13px] lg:text-[20px] xl:text-[20px] gap-5">
        <a href="https://drive.google.com/file/d/1I6zbGNGFPfmc4tEvgY1eBpOQaktqhu6d/view?usp=sharing" target='_blank'>RESUME</a>
        <a href="https://github.com/villmokey" target='_blank'>GITHUB</a>
        <a href="https://www.linkedin.com/in/villianfa/" target='_blank'>LINKEDIN</a>
      </div>
      <div className="flex flex-col justify-center mt-40">
        <h2 className='text-white text-[20px] lg:text-[40px] xl:text-[40px] mx-auto'>Villian the web developer</h2>
        <button className='mx-auto'>
          <ReadButton />
        </button>
      </div>
    </div>
  );
});

function App() {

  return (
    <div className="w-full bg-black h-screen flex justify-center p-10 text-white">
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        showCover={true}
        flippingTime={1000}
        autoSize={true}
        className="bg-black shadow-md"
      >
        <PageCover />
          <div className="bg-[url('assets/images/city-sky.png')] bg-center">
            <p className='text-[13px] lg:text-[20px] xl:text-[20px] text-center p-10 mt-20'>Once upon a time in the vast realm of the Internet, there lived a skilled web developer named Villian. With five years of adventuring through the lands of code, Villian had become a master of many powerful tools and enchanted technologies.</p>
          </div>
        <div className="bg-[url('assets/images/village.png')] bg-cover">
          <p className='text-center text-[13px] lg:text-[18px] xl:text-[18px] mt-7 lg:mt-20 xl:mt-20 p-10 '>
            In the bustling village of ReactJS, Villian discovered the magic of creating dynamic and interactive user interfaces. With the help of React's enchanted components, Villian crafted intricate designs that brought web pages to life, casting spells of hooks and wielding the mighty Context API to maintain harmony and efficiency in his creations.
          </p>
        </div>
        <div className="bg-[url('assets/images/city.png')] bg-cover lg:bg-center xl:bg-center">
          <p className='text-center text-[13px] lg:text-[18px] xl:text-[18px] mt-36 lg:mt-96 xl:mt-96 p-10 '>
            In the bustling village of ReactJS, Villian discovered the magic of creating dynamic and interactive user interfaces. With the help of React's enchanted components, Villian crafted intricate designs that brought web pages to life, casting spells of hooks and wielding the mighty Context API to maintain harmony and efficiency in his creations.
          </p>
        </div>
        <div className="bg-[url('assets/images/forest.png')] bg-cover">
          <p className='text-center text-[13px] lg:text-[18px] xl:text-[18px] mt-3 lg:mt-10 xl:mt-10 p-10 '>
            In a nearby forest, adorned with vibrant and versatile utility classes, lay the domain of TailwindCSS. Villian reveled in the simplicity and power of TailwindCSS, creating visually stunning and responsive designs with minimal effort. The magic of TailwindCSS allowed Villian to build without the burden of writing endless custom styles, making each project as light as a feather and as beautiful as a sunrise.
          </p>
        </div>
        <div className="bg-[url('assets/images/river.png')] bg-cover relative">
          <p className='text-center text-[13px] lg:text-[18px] xl:text-[18px] mt-3 p-10 '>
            But Villian’s journey did not end there. Across the river of Backend, past the mountains of Middleware, stood the fortress of Laravel. Within these walls, Villian harnessed the might of PHP to build robust and scalable server-side applications. Using the powerful Eloquent ORM, Villian tamed databases, and with Laravel’s built-in tools, he forged secure and efficient APIs.
          </p>
          <img src={Php} alt="php" width={100} className='absolute bottom-1 right-10' />
          <img src={Laravel} alt="php" width={50} className='absolute bottom-[140px] right-10' />
          <img src={Mysql} alt="php" width={100} className='absolute bottom-[100px] right-0 left-6' />
        </div>
        <div className="bg-[url('assets/images/guild.png')] bg-cover">
          <p className='text-center text-[13px] lg:text-[18px] xl:text-[18px] mt-3 lg:mt-32 xl:mt-32 p-10 '>
          Throughout his adventures, Villian faced many challenges, from debugging ancient code to optimizing performance under the watchful eye of the Page Speed Dragon. Yet, with each challenge, Villian grew stronger and wiser, always ready to take on the next quest.

          And so, with a heart full of passion and a mind brimming with knowledge, Villian continues his journey, eager to create new and wondrous web applications. He seeks to join forces with like-minded adventurers, sharing his skills and learning from others, to bring even greater magic to the digital world.
          </p>
        </div>
        <div className="bg-[url('assets/images/ending.png')] bg-cover">
          <p className='text-left text-[13px] lg:text-[18px] xl:text-[18px] mt-[100px] lg:mt-[240px] xl:mt-[240px] p-10 '>
            Thank you for joining me on this tale of my adventures. I look forward to embarking on new quests together and creating stories that will be remembered throughout the realms of the Internet.
          </p>
          <p className='text-[13px] lg:text-[18px] xl:text-[18px] px-10'>
            With magical regards,
          </p>
          <p className='text-[13px] lg:text-[18px] xl:text-[18px] mt-5 px-10'>
            Villian
          </p>
          <p className='text-[13px] lg:text-[18px] xl:text-[18px] text-right mt-10 px-10'>
            villian780@gmail.com
          </p>
        </div>
      </HTMLFlipBook>
    </div>
  )
}

export default App
