import { Builder } from "../builder/builder"
import { Page } from "../.."
import { Globals } from "../.."
import "./sidebar.css"

export function Sidebar(){

    const sidebar = Builder.build({
        classes: ["sidebar"],
        parent: Page.content
    })

    const fixedElements = Builder.build({
        type: "ul",
        classes: ["fixed-elements"],
        text: "Inbox",
        parent: sidebar
    })

    const todayElement = Builder.build({
        type: "li",
        classes: ["sidebar-item", "today-tab-button"],
        text: "Today",
        parent: fixedElements
    })

    const weekElement = Builder.build({
        type: "li",
        classes: ["sidebar-item", "week-tab-button"],
        text: "The next 7 days",
        parent: fixedElements
    })

    const projectsContainer = Builder.build({
        classes: ["projects-container"],
        text: "Projects",
        parent: sidebar,
        overload: (elm) => loadProjects(elm)
     })
}

function loadProjects(projectsList){
    const project = Builder.build({
        type: "p",
        text: "Test project",
        parent: projectsList
    })
}