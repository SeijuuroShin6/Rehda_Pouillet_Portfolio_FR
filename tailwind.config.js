/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'Project1': "url('../assets/img/Project_1.png')",
        'Project2': "url('../assets/img/Project_2.png')",
        'Project3': "url('../assets/img/Project_3.png')",
        'Project4': "url('../assets/img/Project_4.png')",
        'Project5': "url('../assets/img/Project_5.png')",
        'Project6': "url('../assets/img/Project_6.svg')",
        'Project7': "url('../assets/img/Project_7.svg')",
      },    
    },
  },
  plugins: [],
}
