import { AppLogo } from "../general/app-logo"
import { ModeToggle } from "../general/mode-toggle"

export const AppHeader = () => {
    return (
        <div className="p-2 flex justify-between items-center" >
            <AppLogo />
            <ModeToggle />
        </div>
    )   
}