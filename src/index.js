import { Builder } from "./components/builder/builder";
import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { TaskCard, TaskList } from "./components/task/task";
import "./style.css"

export const Globals = (function(){
    const GOOGLE_ICON = "material-symbols-outlined"

    return {GOOGLE_ICON}
})();

export const Page = (function (){
    const body = document.querySelector("body");
    const content = document.querySelector("#content")
    
    return { body, content }
})();

const loadElements = (function(){
    Header()
    Sidebar()
    const list = TaskList()
    TaskCard(list)
})()
