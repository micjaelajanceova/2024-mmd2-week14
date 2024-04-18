<template>
  <main>
    <div class="home-row">
      <div class="home-image">
            <img src="/src/assets/IMG_9330.jpg" >
      </div>    
        <div class="home-text">
              <h1>MICHAELA<br>JANCEOVÁ</h1>
              <p>MULTIMEDIA DESIGNER</p>
        </div>
      
    </div>
    
    <!--------------------about------------------------->
   <div id="about">
    <div class="container">
        <div class="about-row">
            <div class="about-col-1">
                <img src="/src/assets/IMG_9328.jpg" alt="">
            </div>
            <div class="about-col-2">
                <h1>ABOUT ME</h1>
                <p>Hi, I'm Michaela Janceová, a 20-year-old Multimedia Design student from Slovakia. In 2023, I made the decision to move to Denmark to study at Business Academy South West in Esbjerg. I'm really passionate about designing, coding, and video editing. I love being creative and learning new things. I'm excited to be in Denmark, immersing myself in a new culture and continuing to develop my skills in multimedia design.</p>
                
                <a href="https://www.flipsnack.com/6698CFBBDC9/cv/full-view.html" class="btn">CV</a> <a href="https://youtu.be/0BuM4XRIk6c" class="btn">VIDEO CV</a>
            </div>
        </div>
    </div>
   </div>

<!--------------------skills------------------------->
  <div id="skills">
    <h1 class="skills-title">SKILLS</h1>
   <div class="skills-list">
        <div>
            <h2>WEB DEVELOPMENT</h2>
            <p>I am working a lot with Visual Studio Code. It helps me write clean and efficient code effortlessly. Throughout my learning, I've also gained valuable experience working with WordPress and GitHub, enhancing my skills in bringing digital projects to life. </p>
        </div>

        <div>
            <h2>VIDEO EDITING</h2>
            <p>In this field, I'm working with Adobe Premiere Pro and After Effects to create captivating content, from making commercials for brands to filming and editing short movies that will definitely caught your attention. Join me on this creative journey. </p>
        </div>

        <div>
            <h2>CONTENT CREATION</h2>
            <p>I thrive on utilizing tools like Adobe Illustrator, Adobe XD, and Figma to bring ideas to life. Whether it’s crafting sleek logos, eye-catching posters, or dynamic flyers, I specialize in transforming concepts into visually stunning designs. </p>
        </div>

   </div>
  </div>

  <!--------------------portfolio------------------------->
  <div id="portfolio">
  <h1 class="portfolio-title">PORTFOLIO</h1>
    
    <h1 class="text-3xl text-[#000000]">
    
    <button @click="selectedCategory = 'Video Editing'"> VIDEO EDITING </button>
    <button @click="selectedCategory = 'Content Creation'"> CONTENT CREATION </button>
    <button @click="selectedCategory = 'Web Development'"> WEB DEVELOPMENT </button>
    <button @click="selectedCategory = ''"> ALL </button>
  </h1>
    
    
    <div v-for="portfolioItem in filteredPortfolioItems" :key="portfolioItem" class="card">
      <p>{{ portfolioItem.id }}</p>
      <h2>{{ portfolioItem.title }}</h2>
      <p :class="portfolioItem.category">{{ portfolioItem.category }}</p>
      <img :src="portfolioItem.image" alt="">
      <p>{{ portfolioItem.description }}</p>
     


      
      <div v-if="portfolioItem.link">
       <button> <a :href="portfolioItem.link">SHOW PROJECT</a> </button>
      </div>
      <div v-else>

      </div>
      </div>

  </div>
<!------contact------>
  <div id="contact">
    <h1 class="contact-title">CONTACT ME</h1>
    <div class="flex items-center justify-center p-12">
  <!-- Author: FormBold Team -->
  <!-- Learn More: https://formbold.com -->
  <div class="mx-auto w-full max-w-[550px]">
    <form action="https://formspree.io/f/xyyrlgrz" method="POST">
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@gmail.com"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="subject"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          class="hover:shadow-form rounded-md bg-[#658876] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
</div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import getPortfolio from '@/modules/getPortfolio'
const { portfolioItems } = getPortfolio()

let selectedCategory = ref('')

const filteredPortfolioItems = computed(() => {
  if (selectedCategory.value == '') {
    return portfolioItems.value
  }
  else {
    return portfolioItems.value.filter(item => item.category == selectedCategory.value)
  }
})

//   // ternary operator instead of if/else
//   // return categoryFilter ? portfolioItems.value.filter(item => item.category === categoryFilter) : portfolioItems.value;
// });
</script>

<style lang="scss">
.portfolio-title {
  margin-top: 80px;
  text-align: center;
  font-family: Impact;
  font-size: 140px; 
  color: #ffffff;
}

.text-3xl button:hover{
  color: white;
}

.card {
  color: #333;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  width: 395px; 
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  transition: background 0.5s, transform 0.5s;
}

.card:hover{
  background-color: #658876;
  color: white;
  transform: translateY(-10px);
}



.card img {
  width: 100%;
  height: auto;
}


.card h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

button{
  padding: 10px 15px;
  margin-top: 20px;
  justify-content: space-around;
}

button a {
  background-color: #658876;
  font-size: 20px;
  color: rgb(255, 255, 255);
  padding: 10px 20px; 
  border-radius: 5px;
  }
  button :hover{
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    border: solid 1px #658876;
  }



@media screen and (max-width: 768px) {
  
  .portfolio-title {
    font-size: 90px;
  }

  button {
    font-size: 25px;
  }

  .card {
    width: 100%;
    margin: 10px 0;
  }

}

</style>

