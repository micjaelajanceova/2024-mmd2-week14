import { ref } from 'vue'

import image1 from '@/assets/marshall.jpg'
import image2 from '@/assets/pizzacommercial.jpg'
import image3 from '@/assets/pizzamenu.jpg'
import image4 from '@/assets/website.jpg'
import image5 from '@/assets/whelogo.png'
import image6 from '@/assets/minime.png'


const getPortfolio = () => {
  const portfolioItems = ref([
    {
      id: 1,
      title: 'MARSHALL COMMERCIAL',
      description: 'This is a group project where we made a commercial for Marshall headphones. We filmed and then edited the commercial using Adobe Premiere Pro and Adobe After Effects. Our goal was to showcase the headphones in a visually appealing way and grab people’s attention.',
      image: image1,
      link: 'https://www.youtube.com/embed/xn3XgjieGE0',
      category: 'Video Editing'
  
    },
    {
      id: 2,
      title: 'LA PIZZA FACTORY COMMERCIAL',
      description: 'I created a commercial for a new Pizzeria in Esbjerg. The goal was to grab people’s attention and promote the pizzeria. It’s all about showcasing the delicious pizzas and inviting everyone to give them a try. I shot and edited the commercial using Adobe Premiere Pro and Adobe After Effects.',
      image: image2,
      link: 'https://youtu.be/4nrXyrlYVJk',
      category: 'Video Editing'
    },
    {
      id: 3,
      title: 'LA PIZZA FACTORY MENU',
      description: 'For this project, I designed a menu card and flyer for the new pizzeria. The pizzeria’s preference for a color palette dominated by white with pink accents set the tone for the design process. Using Adobe Illustrator, I created eye-catching designs that highlight their delicious offerings and attract customers to visit the pizzeria.',
      image: image3,
      link: 'https://www.flipsnack.com/6698CFBBDC9/la-pizza-factory-menu/full-view.html',
      category: 'Content Creation'
    },
    {
      id: 4,
      title: 'CAKE BY VERI WEBSITE',
      description: 'I created a website about cakes as part of a school assignment. It was my first attempt at coding, using Visual Studio Code. It was a valuable learning experience in HTML and CSS. Despite its limitations, it showcased the beginning of my journey into web development.',
      image: image4,
      link: 'https://micjaelajanceova.github.io/',
      category: 'Web Development'
    },
    {
      id: 5,
      title: 'WORK HORSE EQUIPMENT LOGO',
      description: 'I wanted to create a simple and elegant logo for Work Horse Equipment. I chose a dark blue color with white elements to convey professionalism and reliability. Using Adobe Illustrator, I designed the logo to reflect the strength and durability associated with the brand.',
      image: image5,
      link: 'https://www.flipsnack.com/6698CFBBDC9/logo/full-view.html',
      category: 'Content Creation'
    },

    {
      id: 6,
      title: 'MINI ME',
      description: 'My very first school project, It was a delightful introduction to digital art. Tasked with creating an illustration of myself using Adobe Illustrator, I embarked on a journey of creativity and self-expression.',
      image: image6,
      link: 'https://www.flipsnack.com/6698CFBBDC9/mini-me/full-view.html',
      category: 'Content Creation'
    },
    

  ])

  return { portfolioItems }
}

export default getPortfolio
