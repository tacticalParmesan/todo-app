import { Builder } from "../builder/builder"
import { Page } from "../.."
import { Globals } from "../.."
import "./header.css"

export function Header(){

    const header = Builder.build({
        type: "header",
        classes: ["header"],
        overload: (elm) => {
            Page.body.insertBefore(elm, Page.content)
        }
    })

    const innerContainer = Builder.build({
        classes: ["header-container"],
        parent: header
    })

    const logoBox = Builder.build({
        classes: ["logo-container"],
        parent: innerContainer
    })

    const logoIcon = Builder.build({
        type: "span",
        classes: [Globals.GOOGLE_ICON],
        text: "lists",
        parent: logoBox
    })

    const logoText = Builder.build({
        type: "h2",
        classes: ["header-text", "logo-text"],
        text: "ToDo App",
        parent: logoBox
    })

    const loadUser= function(username){

        const userinfo = Builder.build({
            classes: ["user-info-container"],
            parent: innerContainer
        })
    
        const userName = Builder.build({
            type: "p",
            classes: ["user-info", "user-name"],
            text: username,
            parent: userinfo
        })
    
        const userPic = Builder.build({
            type: "span",
            classes: ["user-info", "user-pic", Globals.GOOGLE_ICON],
            text: "person",
            parent: userinfo
        })
    
        const logoutButton = Builder.build({
            type: "button",
            classes: ["user-info", "user-logout", Globals.GOOGLE_ICON],
            text: "logout",
            parent: userinfo
        })
    }

    loadUser("Edoardo Ferreri")

    return {header, loadUser}

}