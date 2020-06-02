import Main from "../views/Main.vue";
import Test from "../views/Test.vue";


const routes = [
    {
        path : '/',
        component : Main,
        name : 'MainView',
        children : [
            // other routes
        ]
    },
    {
        path:'/test',
        component: Test,
        name:'TestView'
    },
]

export default routes