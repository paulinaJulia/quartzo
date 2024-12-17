
import ExamplePage from "./pages/ExamplePage";



const page = () =>{
  if(document.querySelector('#iddapageexample')) return ExamplePage;


  else return null
}


if(!page()) return

const app = Vue.createApp(page());

app.mount("#app")

window.instance = app;